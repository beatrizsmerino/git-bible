<template>
	<div id="app" v-cloak>
		<page-header></page-header>

		<page-title></page-title>

		<router-view/>
	</div>
</template>


<script>
import PageHeader from "./components/PageHeader.vue";
import PageTitle from "./components/PageTitle.vue";

export default {
	components: {
		PageHeader,
		PageTitle
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
	font-family: 'Oxygen', sans-serif;
	color: $color-gray;
}
</style>
