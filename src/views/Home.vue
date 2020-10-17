<template>
	<div class="page-content page-home">
		<div class="page-content__inner">
			<logo/>
			<search/>
		</div>
	</div>
</template>


<script>
	// @ is an alias to /src
	import Logo from "@/components/Logo.vue";
	import Search from "@/components/Search.vue";

	export default {
		name: "home",
		components: {
			Logo,
			Search
		}
	};
</script>


<style lang="scss" scoped>
	.page-content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		&__inner {
			max-width: 80rem;
			margin: 0 auto;

			@include media('lg'){
				max-width: 90%;
			}
		}
	}
</style>