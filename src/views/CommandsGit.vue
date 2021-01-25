<template>
	<div class="page-content">
		<div class="page-content__inner">
			<FilterNav />
			<ListCommandsGit/>
		</div>
	</div>
</template>



<script>
	import FilterNav from "@/components/FilterNav";
	import ListCommandsGit from "@/components/ListCommandsGit";

	export default {
		name: "CommandsGit",
		components: {
			FilterNav,
			ListCommandsGit
		}
	};
</script>



<style lang="scss" scoped>
</style>