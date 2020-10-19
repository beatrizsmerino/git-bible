<template>
	<list-commands :commands="commands"/>
</template>



<script>
	import ListCommands from "@/components/ListCommands.vue";
	import dataCommandsGitFlow from "../data/data-commands-git-flow.json";

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
			this.commands = dataCommandsGitFlow;
		},
	};
</script>



<style lang="scss" scoped>

</style>