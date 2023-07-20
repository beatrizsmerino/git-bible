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
				<div class="code-theme__buttons">
					<UICopy
						class="code-theme__button-copy code-theme__button"
						:text-to-copy="codeFormatted"
					/>

					<label
						class="switch-theme code-theme__button-switch code-theme__button"
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
					{{ code[0] }}
				</code>

				<code
					v-else
					class="code-theme__code is-one-line"
					@scroll="checkScrollHorizontal"
				>
					{{ code }}
				</code>
			</div>
		</div>
	</div>
</template>

<script>
	import UICopy from "@/components/UI/UICopy";

	export default {
		"name": "UICodeTheme",
		"components": {
			UICopy,
		},
		"props": {
			"code": {
				"type": [
					String,
					Array,
				],
				"required": true,
			},
		},
		data() {
			return {
				"codeFormatted": "",
			};
		},
		created() {
			this.codeFormatted = this.convertArrayToStringLines(this.code);
		},
		"methods": {
			toggleScrollClass(element, className, shouldAdd) {
				shouldAdd ? element.classList.add(className) : element.classList.remove(className);
			},
			checkScrollHorizontal(event) {
				const $thisBox = event.target;
				const $thisBoxParent = $thisBox.parentNode.parentNode;

				const { scrollLeft, scrollWidth, offsetWidth } = $thisBox;
				const isAtStart = scrollLeft === 0;
				const isAtEnd = scrollWidth - scrollLeft === offsetWidth;

				this.toggleScrollClass($thisBoxParent, "is-scroll-start", isAtStart);
				this.toggleScrollClass($thisBoxParent, "is-scroll-end", isAtEnd);
			},
			switchTheme(event) {
				const $thisSwitchThemeField = event.target;
				const $thisCodeTheme = $thisSwitchThemeField.parentNode.parentNode.parentNode.parentNode;

				if ($thisCodeTheme && $thisSwitchThemeField.checked) {
					$thisCodeTheme.classList.remove("is-theme-light");
					$thisCodeTheme.classList.add("is-theme-dark");
				} else {
					$thisCodeTheme.classList.remove("is-theme-dark");
					$thisCodeTheme.classList.add("is-theme-light");
				}
			},
			checkLines(codeText) {
				if (Array.isArray(codeText)) {
					return codeText.length === 1 ? 1 : 2;
				}

				return 0;
			},
			convertArrayToStringLines(codeText) {
				return Array.isArray(codeText) || Array.isArray(codeText[0]) ? codeText.join("\r\n") : codeText;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.switch-theme {
		display: inline-block;
		position: relative;
		width: 4.5rem;
		height: 2.2rem;

		&__field {
			position: absolute;
			top: 50%;
			left: 4.8rem;
			width: 1.5rem;
			height: 1.5rem;
			transform: translate(0, -50%);
			opacity: 0;

			&:checked + .switch-theme__bullet:before {
				right: 0.5rem;
				left: initial;
				background-color: $color-brand-2;
			}
		}

		&__bullet {
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 2.2rem;
			transition: 0.4s;
			background-color: $color-brand-2-light;
			cursor: pointer;

			&:before {
				content: "";
				display: inline-block;
				position: absolute;
				top: 50%;
				left: 0.5rem;
				width: 1.5rem;
				height: 1.5rem;
				transform: translate(0, -50%);
				transition: 0.4s;
				background-color: $color-light;
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
						background-color: $color-black;
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
		position: relative;
		width: 100%;
		min-height: 5rem;
		padding: 1.6rem;
		border-radius: 0.5rem;
		background-color: $color-white;
		color: $color-brand-3;
		font-weight: 600;
		white-space: nowrap;

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 1.8rem;
		}

		&__type {
			font-size: 1.5rem;
			font-weight: 300;
		}

		&__type-icon {
			font-size: 0.9rem;
		}

		&__buttons {
			display: flex;
			align-items: center;
		}

		&__button {
			position: relative;

			&:not(:last-child) {
				margin-right: 0.5rem;
			}
		}

		&__button-switch {
		}

		&__button-copy {
		}

		&__content {
			position: relative;
		}

		&__code {
			display: block;
			width: 100%;
			padding-bottom: 1.6rem;
			overflow-x: auto;
			border-radius: 0.4rem;
			font-size: 1.56rem;
			white-space: pre;

			@include media("sm") {
				font-size: 1.3rem;
			}

			&.is-one-line {
				&:before {
					content: "1";
					display: inline-block;
					min-width: 3rem;
					margin-right: 0.5rem;
					color: rgba($color-brand-2-light, 0.5);
				}
			}
		}

		&__code-list {
			margin-left: 0;
			list-style: none;
			counter-reset: numberOfLine;
		}

		&__code-item {
			counter-increment: numberOfLine;

			&:before {
				content: counter(numberOfLine);
				display: inline-block;
				min-width: 3rem;
				margin-right: 0.5rem;
				color: rgba($color-brand-2-light, 0.5);
			}
		}

		&.is-scroll {
			.code-theme {
				&__content {
					&:before,
					&:after {
						content: "";
						display: inline-block;
						position: absolute;
						z-index: 1;
						top: 0;
						width: 3rem;
						height: 100%;
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
			background-color: $color-white;
			color: $color-brand-3;

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
			background-color: $color-brand-2;
			color: $color-brand-1;

			.code-theme {
				&__content {
					&:before {
						background: $color-brand-2;
						background: linear-gradient(
							90deg,
							rgba($color-brand-2, 1) 0%,
							rgba($color-brand-2, 1) 40%,
							rgba($color-brand-2, 0) 80%
						);
					}

					&:after {
						background: $color-brand-2;
						background: linear-gradient(
							90deg,
							rgba($color-brand-2, 0) 0%,
							rgba($color-brand-2, 1) 40%,
							rgba($color-brand-2, 1) 80%
						);
					}
				}
			}
		}
	}
</style>
