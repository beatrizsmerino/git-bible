<template>
	<div class="page-content">
		<div class="page-content__inner">
			<list-commands-git></list-commands-git>
		</div>
	</div>
</template>



<script>
	import ListCommandsGit from "@/components/ListCommandsGit.vue";

	export default {
		name: "CommandsGit",
		components: {
			ListCommandsGit
		}
	};
</script>



<style lang="scss" scoped>
</style>