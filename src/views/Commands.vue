<template>
	<div class="page-content page-commands">
		<div class="page-content__inner">
			<list-commands></list-commands>
		</div>
	</div>
</template>



<script>
	import ListCommands from "@/components/ListCommands.vue";

	export default {
		name: "commands",
		components: {
			ListCommands
		}
	};
</script>



<style lang="scss" scoped>
</style>