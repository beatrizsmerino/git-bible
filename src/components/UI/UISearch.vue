<template>
	<div class="search">
		<form
			class="search-form"
			@submit.prevent
		>
			<div class="search-form__field">
				<input
					id="searchField"
					v-model="searchText"
					class="search-form__input"
					type="text"
					placeholder="Search command"
					@change="checkScrollVertical"
				>
				<i class="search-form__icon icon icon-search" />
			</div>
		</form>
		<div class="search-results is-scroll is-scroll-start">
			<div
				id="searchResultsInner"
				class="search-results__inner"
				@scroll="checkScrollVertical"
			>
				<ul class="search-results__list">
					<li
						v-for="command in filteredList"
						:id="command.name"
						:key="command.id"
						class="search-results__item"
						:data-index="command.id"
					>
						<router-link
							:to="`/${command.url}/#${command.name}`"
							class="search-results__link"
						>
							<span class="search-results__text text-ellipsis">
								{{ command.title }}
							</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		"name": "UISearch",
		data() {
			return {
				"commandList": [],
				"searchText": "",
			};
		},
		"computed": {
			filteredList() {
				return this.commandList.filter(command => command.title.toLowerCase().includes(this.searchText.toLowerCase()));
			},
		},
		created() {
			const commandListGit = this.$t("commandList.git").filter(command => command.name !== "" && command.title !== "");
			const commandListGitFlow = this.$t("commandList.gitFlow").filter(command => command.name !== "" && command.title !== "");
			this.commandList = commandListGit.concat(commandListGitFlow);
		},
		"methods": {
			toggleScrollClass(element, className, shouldAdd) {
				shouldAdd ? element.classList.add(className) : element.classList.remove(className);
			},
			checkScrollVertical() {
				const $thisBox = document.getElementById("searchResultsInner");
				const $thisBoxParent = $thisBox.parentNode;

				const { scrollTop, scrollHeight, offsetHeight } = $thisBox;
				const isAtStart = scrollTop === 0;
				const isAtEnd = scrollHeight - scrollTop === offsetHeight;

				this.toggleScrollClass($thisBoxParent, "is-scroll-start", isAtStart);
				this.toggleScrollClass($thisBoxParent, "is-scroll-end", isAtEnd);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.search {
		width: 100%;
	}

	.search-form {
		width: 100%;
		margin: 0 auto;

		&__field {
			position: relative;
		}

		&__input {
			width: 100%;
			padding: 1.8rem 3rem;
			border: 0;
			border-bottom: 0.3rem solid $color-brand-1;
			color: $color-brand-1;
			font-size: 2rem;
			font-weight: 700;
		}

		&__icon {
			position: absolute;
			top: 50%;
			right: 3.2rem;
			transform: translate(0, -50%);
			color: $color-brand-1;
			font-size: 3.2rem;
		}
	}

	.search-results {
		width: 100%;
		margin-top: 2rem;
		font-size: 1.7rem;

		&__inner {
			width: 100%;
			height: #{((5 + 1) * 4)}rem;
			overflow-y: scroll;

			@include media("md") {
				height: #{((5 + 1) * 8)}rem;
			}

			@include media("md", $dimension: "height") {
				height: #{((5 + 1) * 8)}rem;
			}
		}

		&__list {
			width: 100%;
			list-style: none;
		}

		&__item {
			text-align: left;

			&:not(:last-child) {
				margin-bottom: 1rem;
			}
		}

		&__link {
			display: inline-block;
			width: 100%;
			height: 5rem;
			margin: 0 auto;
			padding: 1.3rem;
			border-bottom: 0.5rem solid $color-silver;
			background-color: $color-light;
			color: $color-brand-3;

			&:hover {
				background-color: $color-silver;

				.search-results {
					&__link {
						color: $color-brand-2;
					}
				}
			}
		}

		&__text {
			width: 100%;
		}

		&.is-scroll {
			position: relative;

			&:before,
			&:after {
				content: "";
				display: inline-block;
				position: absolute;
				z-index: 1;
				left: 0;
				width: 100%;
				height: 5rem;
				background: $color-white;
			}

			&:before {
				top: 0;
				background: linear-gradient(0deg, rgba($color-white, 0) 0%, rgba($color-white, 1) 100%);
			}

			&:after {
				bottom: 0;
				background: linear-gradient(0deg, rgba($color-white, 1) 0%, rgba($color-white, 0) 100%);
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
	}
</style>
