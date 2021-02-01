<template>
	<div
		class="command"
		:id="commandData.name"
		:data-index="commandIndex"
		:class="{'is-selected': commandStatus}"
	>
		<h3 class="command__title">
			<router-link
				:to="`#${commandData.name}`"
				class="command__anchor-link"
			>
				<i class="reference__url-icon">
					<font-awesome-icon :icon="['fas', 'link']" />
				</i>
			</router-link>
			{{commandData.title}}
		</h3>

		<div
			class="command__description"
			v-if="commandData.description"
			v-html="commandData.description"
		/>

		<div
			class="command__blocks-code"
			v-if="Array.isArray(commandData.code) && Array.isArray(commandData.code[0])"
		>
			<CodeTheme
				class="command__code"
				v-for="(codeBlock, index) in commandData.code"
				:code="commandData.code[index]"
				:key="`code-${index}`"
			/>
		</div>

		<CodeTheme
			class="command__code"
			:code="commandData.code"
			v-if="Array.isArray(commandData.code) && typeof commandData.code[0] == 'string' || typeof commandData.code == 'string'"
		/>
	</div>
</template>



<script>
	import CodeTheme from "@/components/CodeTheme";

	export default {
		name: 'Commands',
		components: {
			CodeTheme
		},
		props: {
			commandData: {
				type: Object,
				required: true
			},
			commandIndex: {
				type: Number,
				required: true
			},
			commandStatus: {
				type: Boolean,
				required: true
			}
		}
	}
</script>


<style lang="scss" scoped>
	.command {
		padding: 2.7rem 3.2rem;
		font-size: 1.9rem;
		background-color: $color-light;
		border-bottom: 0.8rem solid $color-silver;
		scroll-margin-top: calc(8em + 3rem);
		transition: all 0.5s ease-in-out 0s;

		@include media("sm") {
			padding: 1.8rem;
			scroll-margin-top: calc(6em + 3rem);
		}

		&__title {
			margin-bottom: 1rem;
			font-size: 2rem;
			color: $color-brand-2;

			@include media("sm") {
				font-size: 1.8rem;
			}
		}

		&__anchor-link {
			margin-right: 1rem;
			color: $color-brand-2-light;

			&:hover {
				color: $color-brand-2;
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

				p + ul,
				p + ol {
					margin-bottom: 1rem;
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

					@include media("md") {
						white-space: initial;
					}
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
			padding: 2.7rem 3.2rem calc(2.7rem - 0.8rem);
			background-color: $color-silver;

			@include media("sm") {
				padding: 1.8rem 1.8rem calc(1.8rem - 0.8rem);
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