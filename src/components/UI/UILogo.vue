<template>
	<div
		class="logo"
		:class="theme"
	>
		<router-link
			to="/"
			class="logo__link"
		>
			<i class="logo__icon icon icon-git" />
			<div class="logo__text">
				<span class="logo__git">
					git
				</span>
				<span class="logo__bible">
					Bible
				</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		"name": "UILogo",
		"props": {
			"theme": {
				"type": String,
			},
		},
	};
</script>

<style lang="scss">
	.logo {
		display: inline-block;
		font-family: "Adelle Bold", "Georgia", "Times New Roman", serif;
		font-size: 5rem;

		&__link {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&__icon {
			color: $color-brand-1;
		}

		&__text {
			margin-left: 1.6rem;
			display: flex;
		}

		&__git {
			color: $color-brand-2;
		}
		&__bible {
			color: $color-brand-2-light;
		}

		&--icon {
			.logo {
				&__text {
					display: none;
				}
			}
		}

		&--light {
			.logo {
				&__icon {
					color: $color-white;
				}

				&__git {
					color: $color-white;
				}

				&__bible {
					color: rgba($color-white, 0.7);
				}
			}
		}

		&--header {
			.logo {
				&__icon,
				&__text {
					@include media("sm") {
						font-size: 0.8em;
					}
				}
			}
		}

		&--home {
			width: 100%;
			margin-bottom: 2rem;
			font-size: 11.2rem;

			@include media("md") {
				font-size: 10rem;
			}

			@include media("md") {
				display: none;
			}

			@include media("md", $dimension: "height") {
				display: none;
			}
		}
	}
</style>
