<template>
	<div>
		<div class="logo" :class="theme">
			<i class="logo__icon icon icon-git"></i>
			<div class="logo__text">
				<span class="logo__git">git</span>
				<span class="logo__bible">Bible</span>
			</div>
		</div>
	</div>
</template>



<script>
	export default {
		props: {
			theme: {
				type: String
			}
		},
	}
</script>



<style lang="scss">
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Adelle Bold", "Georgia", "Times New Roman", serif;
		font-size: 7rem;

		@include t-media("md") {
			font-size: 16vw;
		}

		&__icon {
			color: $color-brand-1;
		}

		&__text {
			margin-left: 1rem;
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

				&__git{
					color: $color-white;
				}

				&__bible {
					color: rgba($color-white, 0.7);
				}
			}
		}

		&--header {
			font-size: 3rem;

			@include t-media("sm") {
				font-size: 2.5rem;
			}
		}
	}
</style>