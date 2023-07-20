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
		"name": "PageTitle",
	};
</script>

<style lang="scss" scoped>
	.page-title {
		margin: 5rem 0 3rem;
		padding: 1.5rem 0;
		transition: all 1s ease-in-out 0s, margin 1ms;
		background-color: $color-white;
		color: $color-brand-1;
		font-size: 4.8rem;
		line-height: 100%;
		text-align: center;

		@include media("sm") {
			padding: 6rem 0 3rem;
			font-size: 3.5rem;
		}

		&.is-fixed {
			position: fixed;
			z-index: 99;
			top: 8rem;
			left: 0;
			width: 100%;
			margin: 0;
			background-color: rgba($color-white, 0.8);
			font-size: 3.5rem;

			@include media("sm") {
				top: 6rem;
				font-size: 2.5rem;
			}
		}
	}
</style>
