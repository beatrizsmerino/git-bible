<template>
	<div
		id="app"
		class="sticky__app"
		v-cloak
	>
		<div class="sticky__content">
			<page-header></page-header>
			<page-title></page-title>
			<router-view />
		</div>

		<page-footer class="sticky__footer"></page-footer>
	</div>
</template>


<script>
	import PageHeader from "./components/PageHeader.vue";
	import PageTitle from "./components/PageTitle.vue";
	import PageFooter from "./components/PageFooter.vue";

	export default {
		components: {
			PageHeader,
			PageTitle,
			PageFooter
		},
		methods: {
			addSticky: function () {
				const html = document.getElementsByTagName('html')[0];
				const body = document.getElementsByTagName('body')[0];
				html.classList.add("sticky");
				body.classList.add("sticky__body");
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
			margin-top: 9rem;
			flex: 1 0 auto;
		}

		&__footer {
			flex-shrink: 0;
		}
	}

	.page-content {
		width: 90%;
		margin: 0 auto 9rem;

		&__inner {
		}
	}
</style>
