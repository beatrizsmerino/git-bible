<template>
	<ul class="list-commands">
		<li
			v-for="(command, index) in commandsFormatted"
			:key="`command-${index}`"
			:ref="command.name"
			class="list-commands__item"
		>
			<Command
				:command-data="command"
				:command-index="index"
				:command-status="command.name === anchorName ? true : false"
			/>
		</li>
	</ul>
</template>

<script>
	import Command from '@/components/Command';

	export default {
		name: 'ListCommands',
		components: {
			Command
		},
		props: {
			commands: Array
		},
		data() {
			return {
				commandsFormatted: '',
				anchorName: this.$route.hash.split('#').pop()
			};
		},
		watch: {
			$route(to) {
				this.anchorName = to.hash.split('#').pop();
			},
			commands(newValue, oldValue) {
				this.commandsFormatted = newValue;
				console.log('Prop changed: ', newValue, ' | was: ', oldValue);
			}
		},
		created() {
			this.commandsFormatted = this.commands.filter(command => command.name !== '' &&
				command.title !== '' &&
				command.code !== '');
		}
	};
</script>

<style lang="scss" scoped>
	.list-commands {
		list-style: none;

		&__item {
			&:not(:last-child) {
				margin-bottom: 3rem;
			}
		}
	}
</style>
