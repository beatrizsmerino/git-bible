<template>
	<div id="app" class="sticky__app" v-cloak>
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
	};
</script>


<style lang="scss">
	[v-cloak] {
		display: none;
	}

	body {
		font-family: "Oxygen", sans-serif;
		color: $color-gray;
	}

	// STICKY
	html,
	body {
		height: 100%;
	}

	.sticky {
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

	.page-content{
		width: 90%;
		margin: 0 auto 9rem;

		&__inner{

		}
	}
</style>
