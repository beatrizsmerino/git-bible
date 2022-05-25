<template>
	<div class="page-content">
		<div class="page-content__inner">
			<FilterNav />
			<CommandList :command-list="getCommandList" />
		</div>
	</div>
</template>

<script>

	// import { i18n } from '@/plugins/i18n';
	import FilterNav from '@/components/Filter/FilterNav';
	import CommandList from '@/components/Command/CommandList';

	export default {
		name: 'CommandsGit',
		components: {
			FilterNav,
			CommandList
		},
		computed: {
			getCommandList() {
				return this.$t('commandList.git');
			}
		}
	};
</script>

<style lang="scss" scoped></style>
