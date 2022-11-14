<template>
	<div>
		<div class="code-theme is-theme-light is-scroll is-scroll-start">
			<div class="code-theme__header">
				<p class="code-theme__type">
					<i class="code-theme__type-icon">
						<font-awesome-icon :icon="['fas', 'terminal']" />
					</i>
					Shell Bash
				</p>
				<div class="code-theme__button-list">
					<UICopy
						class="code-theme__button-copy code-theme__button"
						:text-to-copy="codeFormatted"
					/>

					<label
						class="code-theme__button switch-theme"
						@change="switchTheme"
					>
						<input
							class="switch-theme__field"
							type="checkbox"
						>
						<span class="switch-theme__bullet switch-theme__bullet--rounded" />
					</label>
				</div>
			</div>

			<div class="code-theme__content">
				<code
					v-if="checkLines(code) === 2"
					class="code-theme__code is-multiple-line"
					@scroll="checkScrollHorizontal"
				>
					<ol class="code-theme__code-list">
						<li
							v-for="(line, index) in code"
							:key="`line-${index}`"
							class="code-theme__code-item"
						>
							{{ code[index] }}
						</li>
					</ol>
				</code>

				<code
					v-else-if="checkLines(code) === 1"
					class="code-theme__code is-one-line"
					@scroll="checkScrollHorizontal"
				>
					<ol class="code-theme__code-list">
						<li class="code-theme__code-item">
							{{ code[0] }}
						</li>
					</ol>
				</code>

				<code
					v-else
					class="code-theme__code is-one-line"
					@scroll="checkScrollHorizontal"
				>
					<ol class="code-theme__code-list">
						<li class="code-theme__code-item">
							{{ code }}
						</li>
					</ol>
				</code>
			</div>
		</div>
	</div>
</template>

<script>
	import UICopy from '@/components/UI/UICopy';

	export default {
		name: 'UICodeTheme',
		components: {
			UICopy
		},
		props: {
			code: {
				type: [
					String,
					Array
				],
				required: true
			}
		},
		data() {
			return {
				codeFormatted: ''
			};
		},
		created() {
			this.codeFormatted = this.convertArrayToStringLines(this.code);
		},
		methods: {
			checkScrollHorizontal(event) {
				const $thisBox = event.target;
				const $thisBoxWidth = $thisBox.offsetWidth;
				const $thisBoxScrollLeft = $thisBox.scrollLeft;
				const $thisBoxScrollWidth = $thisBox.scrollWidth;

				const $thisBoxParent = $thisBox.parentNode.parentNode;
				$thisBoxParent.classList.add('is-scroll');

				if ($thisBoxScrollLeft === 0) {
					$thisBoxParent.classList.remove('is-scroll-end');
					$thisBoxParent.classList.add('is-scroll-start');
				} else if (
					$thisBoxScrollWidth - $thisBoxScrollLeft ==
					$thisBoxWidth
				) {
					$thisBoxParent.classList.remove('is-scroll-start');
					$thisBoxParent.classList.add('is-scroll-end');
				} else {
					$thisBoxParent.classList.remove('is-scroll-end');
					$thisBoxParent.classList.remove('is-scroll-start');
				}
			},
			switchTheme(event) {
				const $thisSwitchThemeField = event.target;
				const $thisCodeTheme =
					$thisSwitchThemeField.parentNode.parentNode.parentNode.
						parentNode;

				if ($thisCodeTheme && $thisSwitchThemeField.checked) {
					$thisCodeTheme.classList.remove('is-theme-light');
					$thisCodeTheme.classList.add('is-theme-dark');
				} else {
					$thisCodeTheme.classList.remove('is-theme-dark');
					$thisCodeTheme.classList.add('is-theme-light');
				}
			},
			checkLines(codeText) {
				if (Array.isArray(codeText) && codeText.length == 1) {
					return 1;
				} else if (Array.isArray(codeText) && codeText.length >= 1) {
					return 2;
				}

				return 0;
			},
			convertArrayToStringLines(codeText) {
				return Array.isArray(codeText) || Array.isArray(codeText[0])
					? codeText.join('\r\n')
					: codeText;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.switch-theme {
		width: 4.5rem;
		height: 2.2rem;
		display: inline-block;
		position: relative;

		&__field {
			width: 1.5rem;
			height: 1.5rem;
			position: absolute;
			top: 50%;
			left: 4.8rem;
			transform: translate(0, -50%);
			opacity: 0;

			&:checked + .switch-theme__bullet:before {
				left: initial;
				right: 0.5rem;
				background-color: $color-brand-2-light;
			}
		}

		&__bullet {
			width: 100%;
			height: 2.2rem;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			background-color: $color-brand-2-light;
			transition: 0.4s;
			cursor: pointer;

			&:before {
				content: '';
				width: 1.5rem;
				height: 1.5rem;
				display: inline-block;
				position: absolute;
				left: 0.5rem;
				top: 50%;
				transform: translate(0, -50%);
				background-color: $color-light;
				transition: 0.4s;
			}

			&--rounded {
				border-radius: 2rem;

				&:before {
					border-radius: 50%;
				}
			}
		}

		&:hover {
			.switch-theme {
				&__field {
					&:checked + .switch-theme__bullet:before {
						background-color: mix(
							$color-black,
							$color-brand-2-light,
							20%
						);
					}
				}

				&__bullet {
					&:before {
						background-color: $color-white;
					}
				}
			}
		}
	}

	.code-theme {
		width: 100%;
		min-height: 5rem;
		padding: 1.6rem;
		position: relative;
		white-space: nowrap;
		font-weight: 600;
		color: $color-brand-3;
		border-radius: 0.5rem;
		background-color: $color-white;

		&__header {
			margin-bottom: 1.8rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__type {
			font-size: 1.5rem;
			font-weight: 300;
			color: $color-brand-2-light;
		}

		&__type-icon {
			font-size: 0.9rem;
		}

		&__button-list {
			display: flex;
			align-items: center;
		}

		&__button {
			position: relative;

			&:not(:last-child) {
				margin-right: 0.5rem;
			}
		}

		&__content {
			position: relative;
		}

		&__code {
			width: 100%;
			padding-bottom: 1.6rem;
			display: block;
			white-space: pre;
			font-size: 1.56rem;
			border-radius: 0.4rem;
			overflow-x: auto;

			@include media('sm') {
				font-size: 1.3rem;
			}
		}

		&__code-list {
			list-style: none;
			counter-reset: numberOfLine;
			margin-left: 0;
		}

		&__code-item {
			counter-increment: numberOfLine;

			&::before {
				content: counter(numberOfLine);
				min-width: 2rem;
				margin-right: 0.5rem;
				display: inline-block;
				color: rgba($color-brand-2-light, 0.5);
			}
		}

		&.is-scroll {
			.code-theme {
				&__content {
					&:before,
					&:after {
						content: '';
						display: inline-block;
						width: 3rem;
						height: 100%;
						position: absolute;
						top: 0;
						z-index: 1;
					}

					&:before {
						left: 0;
						border-radius: 0.4rem 0 0 0.4rem;
					}

					&:after {
						right: 0;
						border-radius: 0 0.4rem 0.4rem 0;
					}
				}
			}
		}

		&.is-scroll-start {
			.code-theme {
				&__content {
					&:before {
						display: none;
					}
				}
			}
		}

		&.is-scroll-end {
			.code-theme {
				&__content {
					&:after {
						display: none;
					}
				}
			}
		}

		&.is-theme-light {
			color: $color-brand-3;
			background-color: $color-white;

			.code-theme {
				&__content {
					&:before {
						background: $color-white;
						background: linear-gradient(
							90deg,
							rgba($color-white, 1) 0%,
							rgba($color-white, 1) 40%,
							rgba($color-white, 0) 80%
						);
					}

					&:after {
						background: $color-white;
						background: linear-gradient(
							90deg,
							rgba($color-white, 0) 0%,
							rgba($color-white, 1) 40%,
							rgba($color-white, 1) 80%
						);
					}
				}
			}
		}

		&.is-theme-dark {
			color: $color-white;
			background-color: $color-brand-2-light;

			.button-copy {
				color: $color-brand-2-light;
				background-color: mix($color-white, $color-brand-2-light, 70%);

				&:hover {
					color: mix($color-black, $color-brand-2-light, 20%);
				}
			}

			.switch-theme {
				&__bullet {
					background-color: mix($color-white, $color-brand-2-light, 70%);
				}
			}

			.code-theme {
				&__type {
					color: $color-brand-2;
				}

				&__code-item {
					&::before {
						color: rgba($color-brand-2, 0.5);
					}
				}

				&__content {
					&:before {
						background: $color-brand-2-light;
						background: linear-gradient(
							90deg,
							rgba($color-brand-2-light, 1) 0%,
							rgba($color-brand-2-light, 1) 40%,
							rgba($color-brand-2-light, 0) 80%
						);
					}

					&:after {
						background: $color-brand-2-light;
						background: linear-gradient(
							90deg,
							rgba($color-brand-2-light, 0) 0%,
							rgba($color-brand-2-light, 1) 40%,
							rgba($color-brand-2-light, 1) 80%
						);
					}
				}
			}
		}
	}
</style>
