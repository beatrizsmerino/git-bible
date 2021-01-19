<template>
	<div>
		<nav
			class="nav"
			:class="{'is-open': isOpen}"
		>
			<ul class="nav__list">
				<li class="nav__item">
					<router-link
						to="/"
						class="nav__link"
					>
						Home
					</router-link>
				</li>
				<li class="nav__item">
					<router-link
						to="/commands-git"
						class="nav__link"
						:class="[currentPage.includes('commands-git/') ? isActive : '', 'nav__link']"
					>
						Git
					</router-link>
				</li>
				<li class="nav__item">
					<router-link
						to="/commands-git-flow"
						class="nav__link"
					>
						Git Flow
					</router-link>
				</li>
			</ul>

			<button
				class="nav__button"
				v-on:click="openCloseNav"
			>
				<i class="nav__icon">
					<font-awesome-icon :icon="['fas', 'code-branch']" />
				</i>
			</button>

			<i
				class="nav__bg-mobile"
				:class="{'is-view': isOpen}"
			>
				<font-awesome-icon :icon="['fas', 'code-branch']" />
			</i>
		</nav>
	</div>
</template>



<script>
	export default {
		name: 'PageNav',
		data() {
			return {
				isActive: 'router-link-exact-active router-link-active',
				isOpen: false
			}
		},
		methods: {
			openCloseNav() {
				(this.isOpen == false) ? this.isOpen = true : this.isOpen = false;
			},
			closeNav() {
				this.isOpen = false;
			}
		},
		watch: {
			$route(to, from) {
				if (to !== from) {
					this.closeNav();
				}
			}
		},
		computed: {
			currentPage() {
				return this.$route.path;
			}
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
				width: 100%;
				height: calc(100% - 8rem);
				padding: 4rem 3rem;
				position: fixed;
				top: 8rem;
				left: 0;
				flex-direction: column;
				align-items: flex-end;
				font-size: 3.5rem;
				background-color: $color-brand-1;
				opacity: 0;
				transform: translate(100%, 0);
				transition: all 0.5s ease-in-out 0s;
			}
		}

		&__item {
			&:not(:last-child) {
				margin-right: 2.4rem;

				@include media("md") {
					margin-right: 0;
					margin-bottom: 1.5rem;
				}
			}
		}

		&__link {
			white-space: nowrap;
			color: $color-brand-2;

			&.router-link-exact-active {
				color: $color-white;
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
				content: "Menu";
				display: inline-block;
				position: absolute;
				top: -1.5rem;
				left: 50%;
				transform: translate3d(-50%, 0, 0);
				font-style: initial;
				font-size: 1.2rem;
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
			bottom: -80rem;
			left: 4rem;
			z-index: 999;
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

		&.is-open {
			.nav {
				&__list {
					opacity: 1;
					transform: translate(0, 0);
				}
			}
		}
	}
</style>
