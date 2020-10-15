<template>
	<ul class="list-commands">
		<li v-for="command in commands" :key="command.id" class="command">
			<p class="command__description">
				{{command.description}}
			</p>
			<code-theme class="command__code" :code="command.code"/>
		</li>
	</ul>
</template>



<script>
	import CodeTheme from "@/components/CodeTheme.vue";
	import data from "../data/data-commands.json";

	export default {
		name: 'ListCommands',
		components: {
			CodeTheme
		},
		data() {
			return {
				commands: []
			};
		},
		created() {
			this.commands = data
		}
	};
</script>



<style lang="scss" scoped>
	.list-commands {
		width: 90%;
		margin: 0 auto;
		list-style: none;
	}

	.command {
		padding: 1.2rem 2rem;
		font-size: 1.2rem;
		background-color: $color-light;
		border-bottom: 0.5rem solid $color-silver;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		&__description {
			color: $color-brand-2;
		}

		&__code {
			width: 100%;
			display: inline-block;
		}
	}
</style>