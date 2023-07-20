<template>
	<button
		v-clipboard:copy="textToCopy"
		v-clipboard:success="onSuccess"
		v-clipboard:error="onError"
		class="button-copy"
		aria-label="Copy text"
	>
		<i class="button-copy-text__icon">
			<font-awesome-icon :icon="['fas', 'clone']" />
		</i>

		<transition name="fadeUp">
			<span
				v-if="status === true"
				class="button-copy__message button-copy__message--success"
			>
				Copied!
			</span>
			<span
				v-if="status === false"
				class="button-copy__message button-copy__message--success"
			>
				Press CTRL+C to copy
			</span>
		</transition>
	</button>
</template>

<script>
	export default {
		"name": "UICopy",
		"props": {
			"textToCopy": {
				"type": String,
				"required": true,
			},
		},
		data() {
			return {
				"status": null,
			};
		},
		"methods": {
			resetStatus() {
				this.status = null;
			},
			onSuccess() {
				this.status = true;
				setTimeout(() => this.resetStatus(), 5000);
			},
			onError() {
				this.status = false;
				setTimeout(() => this.resetStatus(), 5000);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.button-copy {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.2rem;
		padding: 0 1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: $color-brand-2-light;
		color: $color-light;
		font-size: 1.2rem;
		cursor: pointer;
		appearance: none;

		&__icon {
			color: $color-light;
			font-size: 1.2rem;
			pointer-events: none;
		}

		&__message {
			position: absolute;
			z-index: 3;
			top: 0;
			left: 50%;
			max-width: 30rem;
			padding: 0.5rem 1rem;
			transform: translate(-50%, -1.5rem) scale(1);
			border-radius: 0.5rem;
			opacity: 0;
			background-color: $color-brand-2-light;
			color: $color-white;

			&--success {
				background-color: $color-success;
			}

			&--error {
				background-color: $color-error;
			}
		}

		&:hover {
			color: $color-white;
		}
	}

	@keyframes fadeUp {
		0% {
			transform: translate(-50%, -1.5rem) scale(1);
			opacity: 0;
		}

		10% {
			transform: translate(-50%, -3rem) scale(1);
			opacity: 1;
		}

		15% {
			transform: translate(-50%, -3rem) scale(1.1);
			opacity: 1;
		}

		20% {
			transform: translate(-50%, -3rem) scale(1);
			opacity: 1;
		}

		90% {
			transform: translate(-50%, -3rem) scale(1);
			opacity: 1;
		}

		100% {
			transform: translate(-50%, -1.5rem) scale(1);
			opacity: 0;
		}
	}

	.fadeUp-enter-active {
		animation: fadeUp 2s ease-in-out 0s forwards;
	}
</style>
