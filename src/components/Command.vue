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
		
		<div
			class="command__blocks-code"
			v-if="Array.isArray(dataCommand.code) && Array.isArray(dataCommand.code[0])"
		>
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
		padding: 2.72rem 3.2rem;
		font-size: 1.92rem;
		background-color: $color-light;
		border-bottom: 0.8rem solid $color-silver;

		@include media("sm") {
			padding: 1.5rem;
		}

		&:not(:last-child) {
			margin-bottom: 1.6rem;
		}

		&__title {
			margin-bottom: 1rem;
			font-size: 2rem;
			color: $color-brand-2;

			@include media("sm") {
				font-size: 1.8rem;
			}
		}

		&__description {
			margin-bottom: 2rem;
			font-size: 1.8rem;
			color: $color-brand-2;

			@include media("sm") {
				font-size: 1.5rem;
				line-height: 130%;
			}

			/deep/ {
				ol,
				ul {
					margin-left: 3rem;
				}

				a {
					font-weight: 700;
					color: $color-brand-3;
				}

				code {
					margin: 0 0.2rem;
					padding: 0.25rem 0.5rem;
					display: inline-block;
					white-space: nowrap;
					line-height: 100%;
					font-size: 0.85em;
					border-radius: 0.6rem;
					background-color: $color-silver;
				}
			}
		}

		&__blocks-code {
			display: flex;
			flex-direction: column;
		}

		&__code {
			width: 100%;
			display: inline-block;

			&:not(:last-child) {
				margin-bottom: 1.5rem;
			}
		}

		&.is-selected {
			padding: 2.72rem 3.2rem calc(2.72rem - 0.8rem);
			background-color: $color-silver;

			@include media("sm") {
				padding: 1.5rem 1.5rem calc(1.5rem - 0.8rem);
			}

			.command {
				&__description {
					/deep/ {
						code {
							background-color: $color-light;
						}
					}
				}
			}
		}
	}
</style>