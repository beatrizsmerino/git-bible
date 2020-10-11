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
		}
	};
</script>


<style lang="scss">
	[v-cloak] {
		display: none;
	}

	body {
		-webkit-font-smoothing: antialiased;
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
			margin-top: 6rem;
			flex: 1 0 auto;
		}
		&__footer {
			flex-shrink: 0;
		}
	}
</style>
