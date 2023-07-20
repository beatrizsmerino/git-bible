<template>
	<div
		:id="commandItem.name"
		class="command-item"
		:data-index="commandIndex"
		:class="{ 'is-selected': commandStatus }"
	>
		<h3 class="command-item__title">
			<router-link
				:to="`#${commandItem.name}`"
				class="command-item__anchor-link"
			>
				<i class="reference__url-icon">
					<font-awesome-icon :icon="['fas', 'link']" />
				</i>
			</router-link>
			{{ commandItem.title }}
		</h3>

		<div
			v-if="commandItem.description"
			class="command-item__description"
			v-html="commandItem.description"
		/>

		<div
			v-if="Array.isArray(commandItem.code) && Array.isArray(commandItem.code[0])"
			class="command-item__blocks-code"
		>
			<UICodeTheme
				v-for="(item, index) in commandItem.code"
				:key="`code-${index}`"
				class="command-item__code"
				:code="item"
			/>
		</div>

		<UICodeTheme
			v-if="
				(Array.isArray(commandItem.code) && typeof commandItem.code[0] == 'string') ||
					typeof commandItem.code == 'string'
			"
			class="command-item__code"
			:code="commandItem.code"
		/>
	</div>
</template>

<script>
	import UICodeTheme from "@/components/UI/UICodeTheme";

	export default {
		"name": "CommandItem",
		"components": {
			UICodeTheme,
		},
		"props": {
			"commandItem": {
				"type": Object,
				"required": true,
			},
			"commandIndex": {
				"type": Number,
				"required": true,
			},
			"commandStatus": {
				"type": Boolean,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.command-item {
		padding: 2.7rem 3.2rem;
		transition: all 0.5s ease-in-out 0s;
		border-bottom: 0.8rem solid $color-silver;
		background-color: $color-light;
		font-size: 1.9rem;
		scroll-margin-top: calc(8em + 3rem);

		@include media("sm") {
			padding: 1.8rem;
			scroll-margin-top: calc(6em + 3rem);
		}

		&__title {
			margin-bottom: 1rem;
			color: $color-brand-2;
			font-size: 2rem;

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
			color: $color-brand-2;
			font-size: 1.8rem;

			@include media("sm") {
				font-size: 1.5rem;
				line-height: 130%;
			}

			:deep() {
				ol,
				ul {
					margin-left: 3rem;
				}

				p {
					+ ul,
					+ ol {
						margin-bottom: 1rem;
					}
				}

				a {
					color: $color-brand-3;
					font-weight: 700;
				}

				code {
					display: inline-block;
					margin: 0 0.2rem;
					padding: 0.25rem 0.5rem;
					border-radius: 0.6rem;
					background-color: $color-silver;
					font-size: 0.85em;
					line-height: 100%;

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
			display: inline-block;
			width: 100%;

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

			.command-item {
				&__description {
					:deep() {
						code {
							background-color: $color-light;
						}
					}
				}
			}
		}
	}
</style>
