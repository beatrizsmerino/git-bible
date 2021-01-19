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
					<button-copy
						class="code-theme__button-copy code-theme__button"
						:textToCopy="codeFormatted"
					/>

					<label
						class="switch-theme code-theme__button-switch code-theme__button"
						v-on:change="switchTheme"
					>
						<input
							class="switch-theme__field"
							type="checkbox"
						>
						<span class="switch-theme__bullet switch-theme__bullet--rounded"></span>
					</label>
				</div>
			</div>

			<div class="code-theme__content">
				<code
					class="code-theme__code"
					v-on:scroll="checkScrollHorizontal"
					v-if="checkLines(code) === 2"
				>
					<ul class="code-theme__code-list">
						<li
							class="code-theme__code-item"
							v-for="(line, index) in code"
							:key="`line-${index}`"
						>{{code[index]}}</li>
					</ul>
				</code>

				<code
					class="code-theme__code"
					v-on:scroll="checkScrollHorizontal"
					v-else-if="checkLines(code) === 1"
				>{{code[0]}}</code>

				<code
					class="code-theme__code"
					v-on:scroll="checkScrollHorizontal"
					v-else
				>{{code}}</code>
			</div>
		</div>
	</div>
</template>



<script>
	import ButtonCopy from "@/components/ButtonCopy.vue";

	export default {
		name: 'CodeTheme',
		components: {
			ButtonCopy
		},
		data() {
			return {
				codeFormatted: ''
			}
		},
		props: {
			code: [String, Array],
		},
		methods: {
			checkScrollHorizontal: function (event) {
				const $thisBox = event.target;
				const $thisBoxWidth = $thisBox.offsetWidth;
				const $thisBoxScrollLeft = $thisBox.scrollLeft;
				const $thisBoxScrollWidth = $thisBox.scrollWidth;

				const $thisBoxParent = $thisBox.parentNode.parentNode;
				$thisBoxParent.classList.add("is-scroll");

				if ($thisBoxScrollLeft === 0) {
					$thisBoxParent.classList.remove("is-scroll-end");
					$thisBoxParent.classList.add("is-scroll-start");
				} else if ($thisBoxScrollWidth - $thisBoxScrollLeft == $thisBoxWidth) {
					$thisBoxParent.classList.remove("is-scroll-start");
					$thisBoxParent.classList.add("is-scroll-end");
				} else {
					$thisBoxParent.classList.remove("is-scroll-end");
					$thisBoxParent.classList.remove("is-scroll-start");
				}
			},
			switchTheme: function (event) {
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
				if (Array.isArray(codeText) && codeText.length == 1) {
					return 1;
				} else if (Array.isArray(codeText) && codeText.length >= 1) {
					return 2;
				} else {
					return 0;
				}
			},
			convertArrayToStringLines(codeText) {
				return (Array.isArray(codeText) || Array.isArray(codeText[0])) ? codeText.join('\r\n') : codeText;
			}
		},
		created() {
			this.codeFormatted = this.convertArrayToStringLines(this.code);
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
				background-color: $color-brand-2;
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
				content: "";
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
		width: 100%;
		min-height: 5rem;
		padding: 1.6rem 1.6rem 0;
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
			width: 100%;
			padding-bottom: 1.6rem;
			display: block;
			white-space: pre;
			font-size: 1.56rem;
			border-radius: 0.4rem;
			overflow-x: auto;

			@include media("sm") {
				font-size: 1.3rem;
			}
		}

		&__code-list {
			list-style: none;
		}

		&.is-scroll {
			.code-theme {
				&__content {
					&:before,
					&:after {
						content: "";
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
			color: $color-brand-1;
			background-color: $color-brand-2;

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