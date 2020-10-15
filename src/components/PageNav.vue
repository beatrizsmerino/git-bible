<template>
	<div>
		<nav id="nav" class="nav">
			<ul class="nav__list">
				<li class="nav__item">
					<router-link
						to="/"
						class="nav__link">
						Home
					</router-link>
				</li>
				<li class="nav__item">
					<router-link
						to="/commands"
						class="nav__link">
						Commands
					</router-link>
				</li>
				<li class="nav__item">
					<router-link
						to="/gitflow"
						class="nav__link">
						Git Flow
					</router-link>
				</li>
			</ul>

			<button class="nav__button" v-on:click="openCloseNav">
				<i class="nav__icon">
					<font-awesome-icon :icon="['fas', 'code-branch']"/>
				</i>
			</button>
		</nav>
	</div>
</template>



<script>
	export default {
		name: 'PageNav',
		methods:{
			openCloseNav: function(){
				const nav = document.getElementById("nav");
				nav.classList.toggle("is-open");
			}
		}
	};
</script>



<style lang="scss" scoped>
	.nav {
		display: flex;
		align-items: center;

		&__list{
			display: flex;
			font-size: 2rem;
			font-weight: 600;
			list-style: none;

			@include t-media("md") {
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

				@include t-media("md") {
					margin-right: 0;
				}
			}
		}

		&__link{
			color: $color-brand-2;

			&.router-link-exact-active {
				color: $color-white;
			}
		}

		&__button{
			display: none;
			appearance: none;
			margin-left: 2rem;
			position: relative;
			z-index: 2;
			border: none;
			background-color: transparent;
			cursor: pointer;

			@include t-media("md") {
				display: inline-block;
			}
		}

		&__icon{
			font-size: 3rem;
			color: $color-white;
			pointer-events: none;
		}

		&.is-open{
			.nav{
				&__list{
					opacity: 1;
					transform: translate(0, 0);
				}
			}
		}
	}
</style>
