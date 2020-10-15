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
		text-align: center;

		&__inner {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>