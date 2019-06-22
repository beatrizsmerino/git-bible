<template>
	<div class="page-content page-home">
		<div class="logo">git</div>
		<search></search>
	</div>
</template>


<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";

export default {
	name: "home",
	components: {
		Search
	}
};
</script>


<style lang="scss" scoped>
.page-content {
	text-align: center;
}
</style>