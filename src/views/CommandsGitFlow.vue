<template>
	<div class="page-content">
		<div class="page-content__inner">
			<FilterNav />
			<ListCommands :commands="getCommands" />
		</div>
	</div>
</template>

<script>
	import FilterNav from '@/components/FilterNav';
	import ListCommands from '@/components/ListCommands';

	export default {
		name: 'CommandsGitFlow',
		components: {
			FilterNav,
			ListCommands
		},
		computed: {
			getCommands() {
				return this.$t('commands.gitFlow');
			}
		}
	};
</script>

<style lang="scss" scoped></style>
