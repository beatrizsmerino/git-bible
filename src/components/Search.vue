<template>
	<div class="search">
		<form class="search-form" method action>
			<div class="search-form__field">
				<input id="searchField" class="search-form__input" type="text" placeholder="Search command" v-model="searchText"/>
				<i class="search-form__icon icon icon-search"></i>
			</div>
		</form>
		<div class="search-results">
			<div class="search-results__inner" v-on:scroll="checkStatusScrollVertical">
				<ul class="search-results__list">
					<li v-for="command in filteredList" :key="command.id" class="search-results__item">
						<router-link :to="`/commands/${command.id}`" class="search-results__link">
							{{command.description}}
						</router-link>
					</li>
				</ul>
			</div>
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
				searchText: '',
			}
		},
		methods:{
			checkStatusScrollVertical: function (event) {
				const $thisBox = event.target;
				const $thisBoxHeight = $thisBox.offsetHeight;
				const $thisBoxScrollTop = $thisBox.scrollTop;
				const $thisBoxScrollHeight = $thisBox.scrollHeight;

				const $thisBoxParent = $thisBox.parentNode;
				$thisBoxParent.classList.add("is-scroll");
				if ($thisBoxScrollTop === 0) {
					$thisBoxParent.classList.remove("is-scroll-end");
					$thisBoxParent.classList.add("is-scroll-start");
				} else if ($thisBoxScrollHeight - $thisBoxScrollTop == $thisBoxHeight) {
					$thisBoxParent.classList.remove("is-scroll-start");
					$thisBoxParent.classList.add("is-scroll-end");
				}
			},
		},
		computed:{
			filteredList: function(){
				return this.commands.filter(command => command.description.includes(this.searchText));
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
		margin-top: 2rem;
		position: relative;
		font-size: 1.7rem;

		&:after{
			content: '';
			display: inline-block;
			width: 100%;
			height: 5rem;
			position: fixed;
			bottom: 0;
			left: 0;
			background: $color-white;
			background: linear-gradient(
				0deg,
				rgba($color-white, 1) 0%,
				rgba($color-white, 0) 100%
			);
		}

		&__inner{
			height: #{(6 * 3)}rem;
			overflow-y: scroll;
		}

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

		&.is-scroll {
			&:before,
			&:after {
				content: "";
				display: inline-block;
				width: 100%;
				height: 5rem;
				position: fixed;
				left: 0;
				z-index: 1;
			}

			&:before {
				position: absolute;
				top: 0;
				background: $color-white;
				background: linear-gradient(
					0deg,
					rgba($color-white, 0) 0%,
					rgba($color-white, 1) 100%
				);
			}

			&:after {
				bottom: 0;
				background: $color-white;
				background: linear-gradient(
					0deg,
					rgba($color-white, 1) 0%,
					rgba($color-white, 0) 100%
				);
			}
		}

		&.is-scroll-start {
			&:before {
				display: none;
			}
		}

		&.is-scroll-end {
			&:after {
				display: none;
			}
		}
	}
</style>
