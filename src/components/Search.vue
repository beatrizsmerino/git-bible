<template>
	<div class="search">
		<form class="search-form" method action>
			<div class="search-form__field">
				<input class="search-form__input" type="text" placeholder="Search command"/>
				<i class="search-form__icon icon icon-search"></i>
			</div>
		</form>
		<div class="search-results">
			<ul class="search-results__list">
				<li v-for="command in commands" :key="command.id" class="search-results__item">
					<router-link :to="`/commands/${command.id}`" class="search-results__link">
						{{command.description}}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>



<script>
	import dataCommands from "../data/data-commands.json";

	export default {
		name: 'Search',
		data() {
			return {
				commands: [],
			}
		},
		created(){
			this.commands = dataCommands;
			console.table(this.commands);
		}
	};
</script>



<style lang="scss" scoped>
	.search-form {
		margin: 2rem auto 0;

		&__field {
			position: relative;
		}

		&__input {
			width: 100%;
			padding: 1.92rem 3.2rem;
			font-size: 2rem;
			color: $color-brand-2;
			border: 0.2rem solid $color-brand-1;
		}

		&__icon {
			position: absolute;
			right: 3.2rem;
			top: 50%;
			transform: translate(0, -50%);
			font-size: 3.2rem;
			color: $color-brand-1;
		}
	}

	.search-results{
		display: none;
		height: #{(6 * 3)}rem;
		margin-top: 2rem;
		font-size: 1.7rem;
		overflow-y: scroll;

		&__list{
			list-style: none;
		}

		&__item{
			height: 6rem;
			text-align: left;
		}

		&__link{
			width: 100%;
			padding: 1.3rem;
			color: $color-brand-3;
			background-color: $color-light;
			border-bottom: 0.5rem solid $color-silver;

			&:hover{
				background-color: $color-silver;

				.search-results{
					&__link{
						color: $color-brand-2;
					}
				}
			}
		}
	}
</style>
