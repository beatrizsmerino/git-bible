<template>
	<div
		v-cloak
		id="app"
		class="sticky__app"
		:class="{ 'is-scroll-down': !isScrollUp }"
	>
		<div class="page-content__wrapper sticky__content">
			<PageHeader />
			<PageTitle :class="{ 'is-fixed': !isScrollUp }" />
			<router-view />
		</div>

		<PageFooter class="sticky__footer" />
	</div>
</template>

<script>
	import PageHeader from "./components/Page/PageHeader";
	import PageTitle from "./components/Page/PageTitle";
	import PageFooter from "./components/Page/PageFooter";

	export default {
		"components": {
			PageHeader,
			PageTitle,
			PageFooter,
		},
		data() {
			return {
				"isScrollUp": true,
			};
		},
		"watch": {
			"$route": {
				handler(to, from) {
					const html = document.getElementsByTagName("html")[0];
					const body = document.getElementsByTagName("body")[0];

					if (typeof from !== "undefined") {
						html.classList.remove("page", `page-${from.name.toLowerCase()}`);
					}
					html.classList.add("page", `page-${to.name.toLowerCase()}`);
					body.classList.add("page-body");
				},
				"immediate": true,
			},
		},
		created() {
			this.addSticky();
			window.addEventListener("scroll", this.handleScroll);
		},
		destroyed() {
			window.removeEventListener("scroll", this.handleScroll);
		},
		"methods": {
			addSticky() {
				const html = document.getElementsByTagName("html")[0];
				const body = document.getElementsByTagName("body")[0];
				html.classList.add("sticky");
				body.classList.add("sticky__body");
			},
			handleScroll() {
				const maxScroll = 95;
				window.scrollY >= maxScroll ? this.isScrollUp = false : this.isScrollUp = true;
			},
		},
	};
</script>

<style lang="scss">
	@import "./assets/scss/base/base-reset";
	@import "./assets/scss/base/base-fonts";

	[v-cloak] {
		display: none;
	}

	body {
		color: $color-gray;
		font-family: $font-oxygen;

		&::-webkit-scrollbar {
			width: 1.5em;
			padding: 0 0.5rem;
			background-color: rgba($color-brand-2, 0.7);
		}

		&::-webkit-scrollbar-track {
			box-shadow: inset 0 0 0.6rem rgb(0 0 0 / 30%);
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba($color-brand-2, 0.4);
			box-shadow: inset 0.5rem 0.5rem 1rem rgb(0 0 0 / 30%);
		}
	}

	// SELECTION TEXT
	// =================================================
	::selection {
		background: $color-brand-2;

		/* Code for Firefox */
		color: $color-brand-1;
	}

	// FORMS
	// =================================================
	::placeholder {
		color: $color-brand-2-light;
		font-weight: 400;
	}

	// TEXT
	// =================================================
	.text-ellipsis {
		max-width: 60rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	// STICKY
	// =================================================
	.sticky {
		height: 100%;

		&__body {
			height: 100%;
		}

		&__app {
			display: flex;
			flex-direction: column;
			height: 100%;
		}

		&__content {
			flex: 1 0 auto;
		}

		&__footer {
			flex-shrink: 0;
		}
	}

	.page-content {
		width: 90%;
		margin: 0 auto 6rem;

		&__wrapper {
			padding-top: 8rem;
			padding-bottom: 5.2rem;

			@include media("md", $dimension: "height") {
				padding-bottom: 0;
			}

			@include media("md") {
				padding-top: 6rem;
				padding-bottom: 0;
			}
		}
	}
</style>
