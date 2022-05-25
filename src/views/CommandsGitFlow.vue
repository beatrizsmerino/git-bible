<template>
	<div class="page-content">
		<div class="page-content__inner">
			<FilterNav />
			<CommandList :command-list="getCommandList" />
		</div>
	</div>
</template>

<script>
	import FilterNav from '@/components/FilterNav';
	import CommandList from '@/components/Command/CommandList';

	export default {
		name: 'CommandsGitFlow',
		components: {
			FilterNav,
			CommandList
		},
		computed: {
			getCommandList() {
				return this.$t('commands.gitFlow');
			}
		}
	};
</script>

<style lang="scss" scoped></style>
