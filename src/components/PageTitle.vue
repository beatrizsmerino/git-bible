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
		padding: 9rem 0 5rem;
		text-align: center;
		font-size: 4.8rem;
		line-height: 100%;
		color: $color-brand-1;
		background-color: $color-white;
		transition: all 1s ease-in-out 0s;

		@include media("sm") {
			padding: 6rem 0 3rem;
			font-size: 3.5rem;
		}

		&.is-fixed {
			width: 100%;
			padding: 1rem 0;
			position: fixed;
			top: 8rem;
			left: 0;
			z-index: 99;
			font-size: 3.5rem;
			color: $color-white;
			background-color: rgba($color-brand-3, 0.9);

			@include media("sm") {
				top: 6rem;
				font-size: 2.5rem;
			}
		}
	}
</style>
