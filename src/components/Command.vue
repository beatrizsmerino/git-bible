<template>
	<div class="command">
		<h3 class="command__title">
			{{dataCommand.title}}
		</h3>
		<div class="command__description">
			<p>
				{{dataCommand.description}}
			</p>
		</div>
		<code-theme
			class="command__code"
			:code="dataCommand.code"
		/>
	</div>
</template>



<script>
	import CodeTheme from "@/components/CodeTheme.vue";

	export default {
		name: 'Commands',
		components: {
			CodeTheme
		},
		props: {
			dataCommand: Object,
		},
	}
</script>


<style lang="scss" scoped>
	.command {
		padding: 1.92rem 3.2rem;
		font-size: 1.92rem;
		background-color: $color-light;
		border-bottom: 0.8rem solid $color-silver;

		&:not(:last-child) {
			margin-bottom: 1.6rem;
		}

		&__title {
			margin-bottom: 1rem;
			color: $color-brand-2;
		}

		&__description {
			margin-bottom: 3rem;
			font-size: 1.8rem;
			color: $color-brand-2;
		}

		&__code {
			width: 100%;
			display: inline-block;
		}

		&.is-selected {
			background-color: $color-silver;
		}
	}
</style>