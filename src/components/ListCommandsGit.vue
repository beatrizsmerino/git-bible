<template>
	<list-commands :commands="commands" />
</template>



<script>
	import ListCommands from "@/components/ListCommands.vue";
	import dataCommandsGit from "../data/data-commands-git.json";

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
			this.commands = dataCommandsGit;
		},
	};
</script>



<style lang="scss" scoped>
</style>