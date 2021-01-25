<template>
	<div
		id="app"
		class="sticky__app"
		:class="{'is-scroll-down': !isScrollUp}"
		v-cloak
	>
		<div class="page-content__wrapper sticky__content">
			<page-header />
			<page-title :class="{'is-fixed': !isScrollUp}" />
			<router-view />
		</div>

		<page-footer class="sticky__footer"></page-footer>
	</div>
</template>


<script>
	import PageHeader from "./components/Page/PageHeader";
	import PageTitle from "./components/Page/PageTitle";
	import PageFooter from "./components/Page/PageFooter";

	export default {
		components: {
			PageHeader,
			PageTitle,
			PageFooter
		},
		data() {
			return {
				isScrollUp: true
			}
		},
		methods: {
			addSticky: function () {
				const html = document.getElementsByTagName('html')[0];
				const body = document.getElementsByTagName('body')[0];
				html.classList.add("sticky");
				body.classList.add("sticky__body");
			},
			handleScroll() {
				const maxScroll = 95;
				(window.scrollY >= maxScroll) ? this.isScrollUp = false : this.isScrollUp = true;
			}
		},
		watch: {
			$route: {
				handler(to, from) {
					const html = document.getElementsByTagName('html')[0];
					const body = document.getElementsByTagName('body')[0];

					if (from !== undefined) {
						html.classList.remove('page', 'page-' + from.name.toLowerCase());
					}
					html.classList.add('page', 'page-' + to.name.toLowerCase());
					body.classList.add('page-body');
				},
				immediate: true,
			}
		},
		created() {
			this.addSticky();
			window.addEventListener('scroll', this.handleScroll);
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll);
		},
	};
</script>



<style lang="scss">
	@import "./assets/scss/base/_base-reset.scss";
	@import "./assets/scss/base/_base-fonts.scss";

	[v-cloak] {
		display: none;
	}
	
	body {
		font-family: $font-oxygen;
		color: $color-gray;

		&::-webkit-scrollbar {
			width: 1.5em;
			padding: 0 0.5rem;
			background-color: rgba($color-white, 0.7);
		}

		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		}

		&::-webkit-scrollbar-thumb {
			background-color: $color-brand-1;
			-webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
		}
	}

	// SELECTION TEXT
	// =================================================
	::-moz-selection {
		/* Code for Firefox */
		color: $color-brand-1;
		background: $color-brand-2;
	}

	::selection {
		color: $color-brand-1;
		background: $color-brand-2;
	}

	// FORMS
	// =================================================
	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		font-weight: 400;
		color: $color-brand-2-light;
	}

	::-moz-placeholder {
		/* Firefox 19+ */
		font-weight: 400;
		color: $color-brand-2-light;
	}

	:-ms-input-placeholder {
		/* IE 10+ */
		font-weight: 400;
		color: $color-brand-2-light;
	}

	:-moz-placeholder {
		/* Firefox 18- */
		font-weight: 400;
		color: $color-brand-2-light;
	}

	// TEXT
	// =================================================
	.text-ellipsis {
		max-width: 60rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	// STICKY
	// =================================================
	.sticky {
		height: 100%;

		&__body {
			height: 100%;
		}

		&__app {
			height: 100%;
			display: flex;
			flex-direction: column;
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

		&__inner {
		}
	}
</style>
