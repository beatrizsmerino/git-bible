<template>
	<div>
		<div class="code-theme">
			<label
				class="code-theme__switch switch-theme"
				v-on:change="switchTheme">
				<input
					class="switch-theme__field"
					type="checkbox">
				<span class="switch-theme__bullet switch-theme__bullet--rounded"></span>
			</label>

			<code
				class="code-theme__code"
				v-on:scroll="checkStatusScrollHorizontal">
				{{code}}
			</code>
		</div>
	</div>
</template>



<script>
	export default {
		name: 'CodeTheme',
		props: {
			code: String,
		},
		methods: {
			checkStatusScrollHorizontal: function (event) {
				const $thisBox = event.target;
				const $thisBoxWidth = $thisBox.offsetWidth;
				const $thisBoxScrollLeft = $thisBox.scrollLeft;
				const $thisBoxScrollWidth = $thisBox.scrollWidth;

				const $thisBoxParent = $thisBox.parentNode;
				$thisBoxParent.classList.add("is-scroll");
				if ($thisBoxScrollLeft === 0) {
					$thisBoxParent.classList.remove("is-scroll-end");
					$thisBoxParent.classList.add("is-scroll-start");
				} else if ($thisBoxScrollWidth - $thisBoxScrollLeft == $thisBoxWidth) {
					$thisBoxParent.classList.remove("is-scroll-start");
					$thisBoxParent.classList.add("is-scroll-end");
				}
			},
			switchTheme: function (event) {
				const $thisSwitchThemeField = event.target;
				const $thisCodeTheme = $thisSwitchThemeField.parentNode.parentNode;

				if ($thisCodeTheme && $thisSwitchThemeField.checked) {
					$thisCodeTheme.classList.remove("is-theme-light");
					$thisCodeTheme.classList.add("is-theme-dark");
				} else {
					$thisCodeTheme.classList.remove("is-theme-dark");
					$thisCodeTheme.classList.add("is-theme-light");
				}
			}
		}
	};
</script>



<style lang="scss" scoped>
	.switch-theme {
		width: 2.8rem;
		height: 1.4rem;
		display: inline-block;
		position: relative;

		&__field {
			width: 1rem;
			height: 1rem;
			position: absolute;
			top: 50%;
			left: 0.3rem;
			transform: translate(0, -50%);
			opacity: 0;

			&:checked + .switch-theme__bullet:before {
				left: initial;
				right: 0.3rem;
				background-color: $color-brand-2;
			}
		}

		&__bullet {
			width: 100%;
			height: 1.4rem;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			background-color: $color-brand-2-light;
			transition: 0.4s;
			cursor: pointer;

			&:before {
				content: "";
				width: 1rem;
				height: 1rem;
				display: inline-block;
				position: absolute;
				left: 0.3rem;
				top: 50%;
				transform: translate(0, -50%);
				background-color: $color-silver;
				transition: 0.4s;
			}

			&--rounded {
				border-radius: 1rem;

				&:before {
					border-radius: 50%;
				}
			}
		}
	}

	.code-theme {
		width: 100%;
		position: relative;
		white-space: nowrap;
		font-weight: 600;
		color: $color-brand-3;
		border-radius: 0.4rem;
		background-color: $color-white;
		overflow: hidden;

		&:after {
			content: "";
			display: inline-block;
			width: 2rem;
			height: 100%;
			position: absolute;
			top: 0;
			z-index: 1;
		}

		&:after {
			width: 7rem;
			right: 0;
			background: $color-white;
			background: linear-gradient(
				90deg,
				rgba($color-white, 0) 0%,
				rgba($color-white, 1) 20%,
				rgba($color-white, 1) 80%
			);
		}

		&__switch {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			z-index: 2;
		}

		&__code {
			width: calc(100% - 4rem);
			padding: 1rem;
			display: block;
			border-radius: 0.4rem;
			overflow-x: auto;
		}

		&.is-scroll {
			&:before,
			&:after {
				content: "";
				display: inline-block;
				width: 2rem;
				height: 100%;
				position: absolute;
				top: 0;
				z-index: 1;
			}

			&:before {
				left: 0;
				background: $color-white;
				background: linear-gradient(
					90deg,
					rgba($color-white, 1) 0%,
					rgba($color-white, 1) 20%,
					rgba($color-white, 0) 80%
				);
			}

			&:after {
				width: 7rem;
				right: 0;
				background: $color-white;
				background: linear-gradient(
					90deg,
					rgba($color-white, 0) 0%,
					rgba($color-white, 1) 20%,
					rgba($color-white, 1) 80%
				);
			}
		}

		&.is-scroll-start {
			&:before {
				display: none;
			}
		}

		&.is-scroll-end {
			&:after {
				display: none;
			}
		}

		&.is-theme-light {
			color: $color-brand-3;
			background-color: $color-white;

			&:before {
				left: 0;
				background: $color-white;
				background: linear-gradient(
					90deg,
					rgba($color-white, 1) 0%,
					rgba($color-white, 1) 20%,
					rgba($color-white, 0) 80%
				);
			}

			&:after {
				width: 7rem;
				right: 0;
				background: $color-white;
				background: linear-gradient(
					90deg,
					rgba($color-white, 0) 0%,
					rgba($color-white, 1) 20%,
					rgba($color-white, 1) 80%
				);
			}
		}

		&.is-theme-dark {
			color: $color-brand-1;
			background-color: $color-brand-2;

			&:before {
				background: $color-brand-2;
				background: linear-gradient(
					90deg,
					rgba($color-brand-2, 1) 0%,
					rgba($color-brand-2, 1) 20%,
					rgba($color-brand-2, 0) 80%
				);
			}

			&:after {
				background: $color-brand-2;
				background: linear-gradient(
					90deg,
					rgba($color-brand-2, 0) 0%,
					rgba($color-brand-2, 1) 20%,
					rgba($color-brand-2, 1) 80%
				);
			}
		}
	}
</style>