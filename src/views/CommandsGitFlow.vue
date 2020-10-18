<template>
	<div class="page-content page-commands">
		<div class="page-content__inner">
			<list-commands-git-flow></list-commands-git-flow>
		</div>
	</div>
</template>



<script>
	import ListCommandsGitFlow from "@/components/ListCommandsGitFlow.vue";

	export default {
		name: "CommandsGitFlow",
		components: {
			ListCommandsGitFlow
		}
	};
</script>



<style lang="scss" scoped>
</style>