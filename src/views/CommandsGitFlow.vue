<template>
	<div class="page-content">
		<div class="page-content__inner">
			<FilterNav/>
			<ListCommandsGitFlow/>
		</div>
	</div>
</template>



<script>
	import FilterNav from "@/components/FilterNav";
	import ListCommandsGitFlow from "@/components/ListCommandsGitFlow";

	export default {
		name: "CommandsGitFlow",
		components: {
			FilterNav,
			ListCommandsGitFlow
		}
	};
</script>



<style lang="scss" scoped>
</style>