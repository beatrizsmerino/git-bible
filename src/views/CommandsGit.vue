<template>
	<div class="page-content">
		<div class="page-content__inner">
			<FilterNav
				:command-list="getCommandList"
				@emit-command-list-filtered="getCommandListFilteredByCategories"
			/>
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
		data() {
			return {
				commandListFiltered: []
			};
		},
		computed: {
			getCommandList() {
				if (this.commandListFiltered.length > 0) {
					return this.commandListFiltered;
				}

				return this.$t('commandList.git');
			}
		},
		methods: {
			getCommandListFilteredByCategories(commandListFiltered) {
				this.commandListFiltered = commandListFiltered;
			}
		}
	};
</script>

<style lang="scss" scoped></style>
