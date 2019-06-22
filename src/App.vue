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
@import url("https://fonts.googleapis.com/css?family=Oxygen:400,700,300");
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");


[v-cloak] {
	display: none;
}

body {
	padding-top: 6rem;
	-webkit-font-smoothing: antialiased;
	font-family: 'Oxygen', sans-serif;
	color: $color-gray;
}

.logo {
	font-family: 'Adelle Regular', 'Georgia', 'Times New Roman', serif;
	font-size: 20rem;
}
</style>
