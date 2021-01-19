<template>
	<ul class="list-commands">
		<li
			class="list-commands__item"
			v-for="(command, index) in commandsFormatted"
			:key="`command-${index}`"
			:ref="command.name"
		>
			<command
				:command-data="command"
				:command-index="index"
				:command-status="(command.name === anchorName) ? true : false"
			/>
		</li>
	</ul>
</template>



<script>
	import Command from "@/components/Command.vue";

	export default {
		name: 'ListCommands',
		components: {
			Command
		},
		props: {
			commands: Array,
		},
		data() {
			return {
				commandsFormatted: '',
				anchorName: this.$route.hash.split('#').pop()
			};
		},
		methods: {
			scrollAnchor: function ($thisAnchor) {
				setTimeout(() => {
					if ($thisAnchor !== undefined) {
						let $thisAnchorTop = $thisAnchor[0].offsetTop;
						window.scrollTo({
							left: 0,
							top: $thisAnchorTop - 90 - 70,
							behavior: 'smooth',
						});
					}
				}, 100);
			}
		},
		watch: {
			$route(to) {
				this.anchorName = to.hash.split('#').pop();
				this.scrollAnchor(this.$refs[this.anchorName]);
			}
		},
		mounted() {
			if (this.anchorName) {
				this.scrollAnchor(this.$refs[this.anchorName]);
			}
		},
		created() {
			this.commandsFormatted = this.commands.filter(command => command.name !== "" && command.title !== "" && command.code !== "");
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