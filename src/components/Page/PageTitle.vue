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
		margin: 5rem 0 2rem;
		padding: 1.5rem 0;
		text-align: center;
		font-size: 4.8rem;
		line-height: 100%;
		color: $color-brand-1;
		background-color: $color-white;
		transition: all 1s ease-in-out 0s, margin 1ms;

		@include media('sm') {
			margin: 4rem 0 2rem;
			font-size: 3.8rem;
		}

		&.is-fixed {
			width: 100%;
			margin: 0;
			position: fixed;
			top: 8rem;
			left: 0;
			z-index: 99;
			font-size: 3.8rem;
			background-color: rgba($color-white, 0.8);

			@include media('sm') {
				top: 6rem;
				font-size: 2.8rem;
			}
		}
	}
</style>
