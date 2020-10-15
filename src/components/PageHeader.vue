<template>
	<header class="page-header">
		<logo theme="logo--header logo--light"/>
		<page-nav/>
	</header>
</template>



<script>
	import Logo from "@/components/Logo.vue";
	import PageNav from "@/components/PageNav.vue";

	export default {
		name: 'PageHeader',
		components:{
			Logo,
			PageNav
		}
	};
</script>



<style lang="scss" scoped>
	.page-header {
		width: 100%;
		height: 6rem;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background-color: $color-brand-1;
	}
</style>
