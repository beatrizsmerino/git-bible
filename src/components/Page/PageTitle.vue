<template>
	<h1
		v-if="$route.meta.title != 'Home'"
		class="page-title"
	>
		{{ $route.meta.title }}
	</h1>
</template>

<script>
	export default {
		name: 'PageTitle'
	};
</script>

<style lang="scss" scoped>
	.page-title {
		width: 100%;
		padding: 5rem 0;
		position: fixed;
		top: 8rem;
		left: 0;
		z-index: 1;
		text-align: center;
		font-size: 4.8rem;
		line-height: 100%;
		color: $color-brand-1;
		background-color: $color-white;
		transition: all 0.5s ease-in-out 0s;

		@include media('sm') {
			padding: 3rem 0;
			top: 6rem;
			font-size: 3.8rem;
		}

		&.is-fixed {
			padding: 1.5rem 0;
			z-index: 99;
			font-size: 3.8rem;
			background-color: rgba($color-white, 0.8);

			@include media('sm') {
				font-size: 2.8rem;
			}
		}
	}
</style>
