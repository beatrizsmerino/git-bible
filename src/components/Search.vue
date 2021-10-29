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
				<i class="search-form__icon icon icon-search"/>
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
		name: 'Search',
		data() {
			return {
				commands: [],
				searchText: ''
			};
		},
		computed: {
			filteredList() {
				return this.commands.filter((command) => command.title.toLowerCase().includes(this.searchText.toLowerCase()));
			}
		},
		created() {
			const commandsGit = this.$t('commands.git').filter((command) => command.name !== '' && command.title !== '');
			const commandsGitFlow = this.$t('commands.gitFlow').filter((command) => command.name !== '' && command.title !== '');
			this.commands = commandsGit.concat(commandsGitFlow);
		},
		methods: {
			isScrollStart(element) {
				element.classList.add('is-scroll');
				element.classList.add('is-scroll-start');
				element.classList.remove('is-scroll-end');
			},
			isScrollEnd(element) {
				element.classList.add('is-scroll');
				element.classList.add('is-scroll-end');
				element.classList.remove('is-scroll-start');
			},
			isScrollBoth(element) {
				element.classList.add('is-scroll');
				element.classList.remove('is-scroll-start');
				element.classList.remove('is-scroll-end');
			},
			isScrollReset(element) {
				element.classList.remove('is-scroll');
				element.classList.remove('is-scroll-end');
				element.classList.remove('is-scroll-start');
			},
			checkScrollVertical() {
				const $thisBox = document.getElementById('searchResultsInner');
				const $thisBoxHeight = $thisBox.offsetHeight;
				const $thisBoxScrollTop = $thisBox.scrollTop;
				const $thisBoxScrollHeight = $thisBox.scrollHeight;
				const $thisBoxParent = $thisBox.parentNode;

				if ($thisBoxScrollTop === 0 && $thisBoxScrollHeight === $thisBoxHeight) {
					this.isScrollReset($thisBoxParent);
				} else if (
					$thisBoxScrollTop === 0 &&
					$thisBoxScrollHeight >= $thisBoxHeight
				) {
					this.isScrollStart($thisBoxParent);
				} else if ($thisBoxScrollTop === 0) {
					this.isScrollStart($thisBoxParent);
				} else if (
					$thisBoxScrollTop !== 0 &&
					$thisBoxScrollHeight - $thisBoxScrollTop !== $thisBoxHeight
				) {
					this.isScrollBoth($thisBoxParent);
				} else if ($thisBoxScrollHeight - $thisBoxScrollTop == $thisBoxHeight) {
					this.isScrollEnd($thisBoxParent);
				} else {
					this.isScrollReset($thisBoxParent);
				}
			}
		}
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
    font-size: 2rem;
    font-weight: 700;
    color: $color-brand-1;
    border: none;
    border-bottom: 0.3rem solid $color-brand-1;
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
    width: 100%;
    height: 5rem;
    margin: 0 auto;
    padding: 1.3rem;
    display: inline-block;
    color: $color-brand-3;
    background-color: $color-light;
    border-bottom: 0.5rem solid $color-silver;

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
      width: 100%;
      height: 5rem;
      position: absolute;
      left: 0;
      z-index: 1;
      background: $color-white;
    }

    &:before {
      top: 0;
      background: linear-gradient(
        0deg,
        rgba($color-white, 0) 0%,
        rgba($color-white, 1) 100%
      );
    }

    &:after {
      bottom: 0;
      background: linear-gradient(
        0deg,
        rgba($color-white, 1) 0%,
        rgba($color-white, 0) 100%
      );
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
