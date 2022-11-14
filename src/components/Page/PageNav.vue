<template>
	<nav
		class="page-nav"
		:class="{ 'is-open': isOpen, 'is-animated': isAnimated }"
	>
		<div class="page-nav__wrapper">
			<div class="page-nav__inner">
				<ul class="page-nav__list">
					<li class="page-nav__item">
						<router-link
							to="/"
							class="page-nav__link"
							exact
						>
							<span>Search</span>
							<span class="is-small">
								commands
							</span>
						</router-link>
					</li>
					<li class="page-nav__item">
						<router-link
							to="/command-git"
							class="page-nav__link"
						>
							<span>Git</span>
							<span class="is-small">
								commands
							</span>
						</router-link>
					</li>
					<li class="page-nav__item">
						<router-link
							to="/command-git-flow"
							class="page-nav__link"
						>
							<span>Git Flow</span>
							<span class="is-small">
								commands
							</span>
						</router-link>
					</li>
					<li
						v-show="isOpen"
						class="page-nav__item"
					>
						<router-link
							to="/bibliografy"
							class="page-nav__link"
						>
							Bibliografy
						</router-link>
					</li>
				</ul>
			</div>
			<i
				class="page-nav__bg-mobile"
				:class="{ 'is-view': isOpen }"
			>
				<font-awesome-icon :icon="['fas', 'code-branch']" />
			</i>
		</div>

		<button
			class="page-nav__button"
			@click="openCloseNav"
		>
			<i class="page-nav__icon">
				<font-awesome-icon :icon="['fas', 'code-branch']" />
			</i>
		</button>
	</nav>
</template>

<script>
	export default {
		name: 'PageNav',
		data() {
			return {
				isAnimated: false,
				isOpen: false,
				isMobile: false
			};
		},
		watch: {
			$route(to, from) {
				if (to !== from) {
					this.closeNav();
				}
			},
			isOpen() {
				document.body.style.overflow = this.isOpen ? 'hidden' : '';
			},
			isMobile(newVal, oldVal) {
				if (newVal !== oldVal) {
					this.isMobile = newVal;
				}
				if (!newVal) {
					this.desktopNav();
				}
			}
		},
		created() {
			window.addEventListener('resize', this.handleResize);
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize);
		},
		mounted() {
			this.checkMobile();
		},
		methods: {
			openCloseNav() {
				this.isAnimated = true;
				this.isOpen = !this.isOpen;
			},
			closeNav() {
				this.isOpen = false;
			},
			desktopNav() {
				this.isAnimated = false;
				this.closeNav();
			},
			checkMobile() {
				const maxWidthBreakpointMD = 768;
				if (window.outerWidth >= maxWidthBreakpointMD) {
					this.isMobile = false;
				} else {
					this.isMobile = true;
				}
			},
			handleResize() {
				this.checkMobile();
			}
		}
	};
</script>

<style lang="scss" scoped>
	.page-nav {
		display: flex;
		align-items: center;

		&__wrapper {
			width: 100%;
			background-color: $color-brand-1;

			@include media('md') {
				height: calc(100% - 6rem);
				position: fixed;
				top: 8rem;
				left: 0;
				overflow: hidden;
				opacity: 0;
				transform: translate(100%, 0);
			}

			@include media('sm') {
				top: 6rem;
			}
		}

		&__inner {
			@include media('md') {
				height: 100%;
				position: relative;
				z-index: 3;
			}
		}

		&__list {
			display: flex;
			font-size: 2rem;
			font-weight: 600;
			list-style: none;

			@include media('md') {
				height: 100%;
				padding: 4rem 6rem 4rem 4rem;
				flex-direction: column;
				align-items: flex-end;
				font-size: 4rem;
				overflow-y: scroll;
			}

			@include media('sm') {
				padding: 4rem;
				font-size: 3rem;
			}
		}

		&__item {
			display: flex;
			justify-content: center;
			align-items: center;

			@include media('md') {
				justify-content: flex-end;
			}

			&:not(:last-child) {
				margin-right: 2.4rem;

				@include media('md') {
					margin-right: 0;
					margin-bottom: 4rem;
				}
			}
		}

		&__link {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			white-space: nowrap;
			color: rgba($color-white, 0.7);

			@include media('md') {
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

					@include media('md') {
						font-size: 3rem;
					}
				}
			}
		}

		&__button {
			display: none;
			appearance: none;
			margin-top: 1.5rem;
			margin-left: 2rem;
			position: relative;
			z-index: 2;
			color: $color-white;
			border: none;
			background-color: transparent;
			cursor: pointer;

			&:before {
				content: 'Menu';
				display: inline-block;
				position: absolute;
				top: -1.5rem;
				left: 50%;
				transform: translate3d(-50%, 0, 0);
				font-style: initial;
				font-size: 1.2rem;
			}

			@include media('md') {
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
			top: 20%;
			left: 4rem;
			z-index: 2;
			font-size: 50rem;
			color: rgba(0, 0, 0, 0.1);
			opacity: 0;
			pointer-events: none;
			transition: opacity 0s ease-in-out;

			&.is-view {
				opacity: 1;
				transition: opacity 1.8s ease-in-out, opacity 1s ease-in;
			}
		}

		&.is-animated {
			.page-nav {
				&__wrapper {
					transition: all 0.5s ease-in-out 0s;
				}
			}
		}
		&.is-open {
			.page-nav {
				&__wrapper {
					opacity: 1;
					transform: translate(0, 0);
				}
			}
		}
	}
</style>
