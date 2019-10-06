<template>
	<div id="app" v-cloak>
		<page-header></page-header>

		<page-title></page-title>

		<router-view />

		<page-footer></page-footer>
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
	padding-top: 6rem;
	-webkit-font-smoothing: antialiased;
	font-family: "Oxygen", sans-serif;
	color: $color-gray;
}
</style>
