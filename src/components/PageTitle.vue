<template>
	<h1
		class="page-title"
		v-if="$route.meta.title != 'Home'"
	>
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
		margin: 7rem 0 3.2rem;
		text-align: center;
		font-size: 4.8rem;
		line-height: 1.5;
		color: $color-brand-1;
	}
</style>
