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
		"name": "UIButton",
		"props": {
			"href": {
				"type": String,
				"default": null,
			},
			"to": {
				"type": String,
				"default": null,
			},
			"value": {
				"type": String,
				"default": null,
			},
		},
		"computed": {
			checkTag() {
				if (this.href) {
					return "a";
				} else if (this.value) {
					return "input";
				}

				return "button";
			},
		},
		"methods": {
			buttonClick() {
				this.$emit("emit-click");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.2rem 4rem;
		transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s;
		border: 0.2rem solid transparent;
		outline: none;
		background-color: transparent;
		font-size: 1.6rem;
		font-weight: 900;
		line-height: 110%;
		text-transform: capitalize;
		cursor: pointer;
		user-select: none;
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
			background-color: $color-brand-1;
			color: $color-white;

			.icon {
				&__use {
					fill: $color-white;
				}
			}

			&:hover {
				background-color: mix($color-black, $color-brand-1, 15%);
				color: $color-white;
			}

			&-1 {
				background-color: $color-brand-1;
				color: $color-white;

				&:hover {
					background-color: mix($color-black, $color-brand-1, 15%);
				}
			}

			&-2 {
				background-color: $color-brand-2;
				color: $color-white;

				&:hover {
					background-color: mix($color-black, $color-brand-2, 15%);
				}
			}

			&-2-light {
				background-color: $color-brand-2-light;
				color: $color-white;

				&:hover {
					background-color: mix($color-black, $color-brand-2-light, 15%);
				}
			}

			&-3 {
				background-color: $color-brand-3;
				color: $color-white;

				&:hover {
					background-color: mix($color-black, $color-brand-3, 15%);
				}
			}
		}
	}
</style>
