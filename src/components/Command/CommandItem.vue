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

		<div class="command-item__blocks-code">
			<template v-if="checkBlocksCode === 'multiple'">
				<UICodeTheme
					v-for="(item, index) in commandItem.code"
					:key="`code-${index}`"
					class="command-item__code"
					:code="item"
				/>
			</template>
			<template v-if="checkBlocksCode === 'one'">
				<UICodeTheme
					class="command-item__code"
					:code="commandItem.code"
				/>
			</template>
		</div>

		<div class="command-item__categories">
			<UITagList :tag-list="commandItem.categories" />
		</div>
	</div>
</template>

<script>
	import UICodeTheme from '@/components/UI/UICodeTheme';
	import UITagList from '@/components/UI/UITagList';

	export default {
		name: 'CommandItem',
		components: {
			UICodeTheme,
			UITagList
		},
		props: {
			commandItem: {
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
		},
		computed: {
			checkBlocksCode() {
				if (
					Array.isArray(this.commandItem.code) &&
					typeof this.commandItem.code[0] == 'string' ||
					typeof this.commandItem.code == 'string'
				) {
					return 'one';
				}
				if (
					Array.isArray(this.commandItem.code) &&
					Array.isArray(this.commandItem.code[0])
				) {
					return 'multiple';
				}

				return false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.command-item {
		padding: 2.7rem 3.2rem;
		font-size: 1.9rem;
		background-color: $color-light;
		border-bottom: 0.8rem solid $color-silver;
		scroll-margin-top: calc(8em + 3rem);
		transition: all 0.5s ease-in-out 0s;

		@include media('sm') {
			padding: 1.8rem;
			scroll-margin-top: calc(6em + 3rem);
		}

		&__title {
			margin-bottom: 1rem;
			font-size: 2rem;
			color: $color-brand-2;

			@include media('sm') {
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

			@include media('sm') {
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
					font-weight: 700;
					color: $color-brand-3;
				}

				code {
					margin: 0 0.2rem;
					padding: 0.25rem 0.5rem;
					display: inline-block;
					line-height: 100%;
					font-size: 0.85em;
					border-radius: 0.6rem;
					background-color: $color-silver;

					@include media('md') {
						white-space: initial;
					}
				}
			}
		}

		&__blocks-code {
			display: flex;
			flex-direction: column;

			> * {
				&:not(:last-child) {
					margin-bottom: 1.5rem;
				}
			}
		}

		&__code {
			width: 100%;
			display: inline-block;
		}

		&__categories {
			margin-top: 2rem;
		}

		&.is-selected {
			padding: 2.7rem 3.2rem calc(2.7rem - 0.8rem);
			background-color: $color-silver;

			@include media('sm') {
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
