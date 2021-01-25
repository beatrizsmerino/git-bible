<template>
	<ListCommands :commands="commands" />
</template>



<script>
	import ListCommands from "@/components/ListCommands";
	import dataCommands from "../data/data-commands.json";

	export default {
		name: 'ListCommandsGit',
		components: {
			ListCommands
		},
		data() {
			return {
				commands: []
			};
		},
		created() {
			this.commands = dataCommands.git;
		},
	};
</script>



<style lang="scss" scoped>
</style>