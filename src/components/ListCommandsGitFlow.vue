<template>
	<ListCommands :commands="commands" />
</template>



<script>
	import ListCommands from "@/components/ListCommands";
	import dataCommands from "../data/data-commands.json";

	export default {
		name: 'ListCommandsGitFlow',
		components: {
			ListCommands
		},
		data() {
			return {
				commands: []
			};
		},
		created() {
			this.commands = dataCommands.gitFlow;
		},
	};
</script>



<style lang="scss" scoped>
</style>