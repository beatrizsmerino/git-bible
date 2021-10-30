<template>
	<component
		:is="checkTag"
		:href="href"
		:value="value"
		class="button"
		@click="buttonClick"
	>
		<slot />
	</component>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			href: {
				type: String,
				default: null
			},
			to: {
				type: String,
				default: null
			},
			value: {
				type: String,
				default: null
			}
		},
		computed: {
			checkTag() {
				if (this.href) {
					return 'a';
				} else if (this.value) {
					return 'input';
				}

				return 'button';
			}
		},
		methods: {
			buttonClick() {
				this.$emit('emit-click');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.button {
		padding: 1.2rem 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: 900;
		line-height: 110%;
		border: 0.2rem solid transparent;
		outline: none;
		background-color: transparent;
		transition: color 0.15s ease-in-out 0s,
			background-color 0.15s ease-in-out 0s,
			border-color 0.15s ease-in-out 0s;
		user-select: none;
		cursor: pointer;
		appearance: none;

		> * {
			pointer-events: none;

			&:not(:last-child) {
				margin-right: 1rem;
			}

			&:only-child {
				margin-right: 0;
			}
		}

		&__icon {
			&--left {
				margin-right: 1rem;
			}

			&--right {
				margin-left: 1rem;
			}
		}

		&__text {
			white-space: nowrap;
		}

		&--icon {
			padding: 0;
		}

		&--bg-color {
			color: $color-white;
			background-color: $color-brand-1;

			.icon {
				&__use {
					fill: $color-white;
				}
			}

			&:hover {
				color: $color-white;
				background-color: mix($color-black, $color-brand-1, 15%);
			}

			&-1 {
				color: $color-white;
				background-color: $color-brand-1;

				&:hover {
					background-color: mix($color-black, $color-brand-1, 15%);
				}
			}

			&-2 {
				color: $color-white;
				background-color: $color-brand-2;

				&:hover {
					background-color: mix($color-black, $color-brand-2, 15%);
				}
			}

			&-2-light {
				color: $color-white;
				background-color: $color-brand-2-light;

				&:hover {
					background-color: mix(
						$color-black,
						$color-brand-2-light,
						15%
					);
				}
			}

			&-3 {
				color: $color-white;
				background-color: $color-brand-3;

				&:hover {
					background-color: mix($color-black, $color-brand-3, 15%);
				}
			}
		}
	}
</style>
