<template>
	<div class="command">
		<h3 class="command__title">
			{{dataCommand.title}}
		</h3>
		<div
			class="command__description"
			v-if="dataCommand.description"
			v-html="dataCommand.description"
		></div>
		<div class="command__code">
			<div v-if="Array.isArray(dataCommand.code) && Array.isArray(dataCommand.code[0])">
				<code-theme
					class="command__code"
					v-for="(codeBlock, index) in dataCommand.code"
					:code="dataCommand.code[index]"
					:key="`code-${index}`"
				/>
			</div>

			<code-theme
				class="command__code"
				:code="dataCommand.code"
				v-if="Array.isArray(dataCommand.code) && typeof dataCommand.code[0] == 'string' || typeof dataCommand.code == 'string'"
			/>
		</div>
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
		}
	}
</script>


<style lang="scss" scoped>
	.command {
		padding: 2.72rem 3.2rem 1.92rem;
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
			margin-bottom: 2rem;
			font-size: 1.8rem;
			color: $color-brand-2;

			/deep/ a {
				font-weight: 700;
				color: $color-brand-3;
			}
		}

		&__code {
			width: 100%;
			display: inline-block;

			&:not(:last-child) {
				margin-bottom: 1.5rem;
			}
		}

		&.is-selected {
			background-color: $color-silver;
		}
	}
</style>