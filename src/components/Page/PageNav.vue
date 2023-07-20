<template>
	<div>
		<nav
			class="nav"
			:class="{ 'is-open': isOpen }"
		>
			<ul class="nav__list">
				<li class="nav__item">
					<router-link
						to="/"
						class="nav__link"
						exact
					>
						<span>Search</span>
						<span class="is-small">
							commands
						</span>
					</router-link>
				</li>
				<li class="nav__item">
					<router-link
						to="/command-git"
						class="nav__link"
					>
						<span>Git</span>
						<span class="is-small">
							commands
						</span>
					</router-link>
				</li>
				<li class="nav__item">
					<router-link
						to="/command-git-flow"
						class="nav__link"
					>
						<span>Git Flow</span>
						<span class="is-small">
							commands
						</span>
					</router-link>
				</li>
				<li
					v-show="isOpen"
					class="nav__item"
				>
					<router-link
						to="/bibliografy"
						class="nav__link"
					>
						Bibliografy
					</router-link>
				</li>
			</ul>

			<button
				class="nav__button"
				@click="openCloseNav"
			>
				<i class="nav__icon">
					<font-awesome-icon :icon="['fas', 'code-branch']" />
				</i>
			</button>

			<i
				class="nav__bg-mobile"
				:class="{ 'is-view': isOpen }"
			>
				<font-awesome-icon :icon="['fas', 'code-branch']" />
			</i>
		</nav>
	</div>
</template>

<script>
	export default {
		"name": "PageNav",
		data() {
			return {
				"isOpen": false,
			};
		},
		"watch": {
			$route(to, from) {
				if (to !== from) {
					this.closeNav();
				}
			},
			isOpen() {
				document.body.style.overflow = this.isOpen ? "hidden" : "";
			},
		},
		created() {
			window.addEventListener("resize", this.handleResize);
		},
		destroyed() {
			window.removeEventListener("resize", this.handleResize);
		},
		"methods": {
			openCloseNav() {
				this.isOpen == false ? this.isOpen = true : this.isOpen = false;
			},
			closeNav() {
				this.isOpen = false;
			},
			handleResize(event) {
				const maxWidthBreakpointMD = 768;
				if (event.target.outerWidth >= maxWidthBreakpointMD) {
					this.closeNav();
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.nav {
		display: flex;
		align-items: center;

		&__list {
			display: flex;
			font-size: 2rem;
			font-weight: 600;
			list-style: none;

			@include media("md") {
				position: fixed;
				top: 8rem;
				left: 0;
				flex-direction: column;
				align-items: flex-end;
				width: 100%;
				height: calc(100% - 6rem);
				padding: 4rem 6rem 4rem 4rem;
				overflow-y: scroll;
				transform: translate(100%, 0);
				transition: all 0.5s ease-in-out 0s;
				opacity: 0;
				background-color: $color-brand-1;
				font-size: 4rem;
			}

			@include media("sm") {
				top: 6rem;
				padding: 2rem 4rem 2rem 2rem;
				font-size: 3rem;
			}
		}

		&__item {
			display: flex;
			align-items: center;
			justify-content: center;

			@include media("md") {
				justify-content: flex-end;
			}

			&:not(:last-child) {
				margin-right: 2.4rem;

				@include media("md") {
					margin-right: 0;
					margin-bottom: 4rem;
				}
			}
		}

		&__link {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: rgba($color-white, 0.7);
			white-space: nowrap;

			@include media("md") {
				align-items: flex-end;
				justify-content: flex-end;
			}

			&:hover,
			&.router-link-active {
				color: $color-white;
			}

			> * {
				line-height: 100%;

				&.is-small {
					font-size: 1.5rem;

					@include media("md") {
						font-size: 3rem;
					}
				}
			}
		}

		&__button {
			display: none;
			position: relative;
			z-index: 2;
			margin-top: 1.5rem;
			margin-left: 2rem;
			border: none;
			background-color: transparent;
			color: $color-white;
			cursor: pointer;
			appearance: none;

			&:before {
				content: "Menu";
				display: inline-block;
				position: absolute;
				top: -1.5rem;
				left: 50%;
				transform: translate3d(-50%, 0, 0);
				font-size: 1.2rem;
				font-style: initial;
			}

			@include media("md") {
				display: inline-block;
			}
		}

		&__icon {
			padding-top: 2rem;
			font-size: 3rem;
			pointer-events: none;
		}

		&__bg-mobile {
			position: absolute;
			z-index: 999;
			bottom: -80rem;
			left: 4rem;
			transition: opacity 0s ease-in-out;
			opacity: 0;
			color: rgb(0 0 0 / 10%);
			font-size: 50rem;
			pointer-events: none;

			&.is-view {
				transition: opacity 1.8s ease-in-out, opacity 1s ease-in;
				opacity: 1;
			}
		}

		&.is-open {
			.nav {
				&__list {
					transform: translate(0, 0);
					opacity: 1;
				}
			}
		}
	}
</style>
