<template>
	<div class="page-content">
		<div class="page-content__inner">
			<FilterNav :commands="getCommands" />
			<ListCommands :commands="getCommands" />
		</div>
	</div>
</template>

<script>

	// import { i18n } from '@/plugins/i18n';
	import FilterNav from '@/components/FilterNav';
	import ListCommands from '@/components/ListCommands';

	export default {
		name: 'CommandsGit',
		components: {
			FilterNav,
			ListCommands
		},
		computed: {
			getCommands() {
				return this.$t('commands.git');
			}
		}
	};
</script>

<style lang="scss" scoped></style>
