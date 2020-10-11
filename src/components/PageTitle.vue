<template>
	<h1 class="page-title" v-if="$route.meta.title != 'Home'">
		{{ $route.meta.title }}
	</h1>
</template>



<script>
	export default {
		name: 'PageTitle',
	};
</script>



<style lang="scss" scoped>
	.page-title {
		margin: 4rem 0 2rem;
		text-align: center;
		font-size: 3rem;
		line-height: 1.5;
		color: $color-brand-1;
	}
</style>
