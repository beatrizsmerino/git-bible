<template>
	<div
		:id="commandData.name"
		class="command"
		:data-index="commandIndex"
		:class="{ 'is-selected': commandStatus }"
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
			{{ commandData.title }}
		</h3>

		<div
			v-if="commandData.description"
			class="command__description"
			v-html="commandData.description"
		/>

		<div class="command__blocks-code">
			<template v-if="checkBlocksCode === 'multiple'">
				<CodeTheme
					v-for="(item, index) in commandData.code"
					:key="`code-${index}`"
					class="command__code"
					:code="item"
				/>
			</template>
			<template v-if="checkBlocksCode === 'one'">
				<CodeTheme
					class="command__code"
					:code="commandData.code"
				/>
			</template>
		</div>

		<div class="command__categories">
			<Tag :tag-list="commandData.categories" />
		</div>
	</div>
</template>

<script>
	import CodeTheme from '@/components/CodeTheme';
	import Tag from '@/components/Tag';

	export default {
		name: 'Commands',
		components: {
			CodeTheme,
			Tag
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
		},
		computed: {
			checkBlocksCode() {
				if (Array.isArray(this.commandData.code) && typeof this.commandData.code[0] == 'string' || typeof this.commandData.code == 'string') {
					return 'one';
				}
				if (Array.isArray(this.commandData.code) && Array.isArray(this.commandData.code[0])) {
					return 'multiple';
				}

				return false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.command {
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

			::v-deep {
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

			.command {
				&__description {
					::v-deep {
						code {
							background-color: $color-light;
						}
					}
				}
			}
		}
	}
</style>
