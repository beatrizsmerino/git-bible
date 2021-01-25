<template>
	<div class="page-content">
		<div class="page-content__inner">
			<ListCommandsGit/>
		</div>
	</div>
</template>



<script>
	import ListCommandsGit from "@/components/ListCommandsGit";

	export default {
		name: "CommandsGit",
		components: {
			ListCommandsGit
		}
	};
</script>



<style lang="scss" scoped>
</style>