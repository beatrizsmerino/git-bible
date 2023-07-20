<template>
	<div class="page-content">
		<div class="page-content__inner">
			<UILogo theme="logo--home" />
			<UISearch />
		</div>
	</div>
</template>

<script>

	// @ is an alias to /src
	import UILogo from "@/components/UI/UILogo";
	import UISearch from "@/components/UI/UISearch";

	export default {
		"name": "Home",
		"components": {
			UILogo,
			UISearch,
		},
		mounted() {
			document.querySelector(".page-header").style.boxShadow = "none";
		},
	};
</script>

<style lang="scss" scoped>
	.page-content {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		margin-bottom: 0;
		text-align: center;

		@include media("md", $dimension: "height") {
			height: auto;
			margin: 6rem auto;
		}

		@include media("md") {
			height: auto;
			margin: 6rem auto;
		}

		&__inner {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			max-width: 60rem;

			@include media("md") {
				width: 90%;
				max-width: 100%;
			}
		}
	}
</style>
