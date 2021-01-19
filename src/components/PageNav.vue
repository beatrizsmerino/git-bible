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
			openCloseNav: function () {
				(this.isOpen == false) ? this.isOpen = true : this.isOpen = false;
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
				flex-direction: column;
				align-items: flex-end;
				font-size: 1.8rem;
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

			&:before{
				content: 'Menu';
				display: inline-block;
				position: absolute;
				top: -1.5rem;
				left: 50%;
				transform: translate3d(-50%, 0,0);
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
