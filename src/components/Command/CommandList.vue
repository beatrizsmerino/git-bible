<template>
	<ul class="command-list">
		<li
			v-for="(item, index) in commandListFormatted"
			:key="`command-${index}`"
			:ref="item.name"
			class="command-list__item"
		>
			<CommandItem
				:command-item="item"
				:command-index="index"
				:command-status="item.name === anchorName ? true : false"
			/>
		</li>
	</ul>
</template>

<script>
	import CommandItem from '@/components/Command/CommandItem';

	export default {
		name: 'CommandList',
		components: {
			CommandItem
		},
		props: {
			commandList: Array
		},
		data() {
			return {
				commandListFormatted: '',
				anchorName: this.$route.hash.split('#').pop()
			};
		},
		watch: {
			$route(to) {
				this.anchorName = to.hash.split('#').pop();
			},
			commandList(newValue) {
				this.commandListFormatted = newValue;
			}
		},
		created() {
			this.commandListFormatted = this.commandList.filter(command => command.name !== '' &&
				command.title !== '' &&
				command.code !== '');
		}
	};
</script>

<style lang="scss" scoped>
	.command-list {
		list-style: none;

		&__item {
			&:not(:last-child) {
				margin-bottom: 3rem;
			}
		}
	}
</style>
