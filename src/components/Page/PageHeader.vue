<template>
	<header class="page-header">
		<UILogo theme="logo--header logo--light" />
		<PageNav />
	</header>
</template>

<script>
	import UILogo from "@/components/UI/UILogo";
	import PageNav from "@/components/Page/PageNav";

	export default {
		"name": "PageHeader",
		"components": {
			UILogo,
			PageNav,
		},
	};
</script>

<style lang="scss" scoped>
	.page-header {
		display: flex;
		position: fixed;
		z-index: 99999;
		top: 0;
		left: 0;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 8rem;
		padding: 1.6rem 3.2rem;
		background-color: $color-brand-1;

		@include media("sm") {
			height: 6rem;
			padding: 0.5rem 5%;
		}
	}
</style>
