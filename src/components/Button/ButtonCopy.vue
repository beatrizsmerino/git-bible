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
		name: 'ButtonCopy',
		props: {
			textToCopy: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				status: null
			};
		},
		methods: {
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
			}
		}
	};
</script>

<style lang="scss" scoped>
	.button-copy {
		appearance: none;
		height: 2.2rem;
		padding: 0 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $color-light;
		font-size: 1.2rem;
		border: none;
		border-radius: 0.5rem;
		background-color: $color-brand-2-light;
		cursor: pointer;

		&__icon {
			font-size: 1.2rem;
			color: $color-light;
			pointer-events: none;
		}

		&__message {
			max-width: 30rem;
			padding: 0.5rem 1rem;
			position: absolute;
			top: 0;
			left: 50%;
			z-index: 3;
			transform: translate(-50%, -1.5rem) scale(1);
			color: $color-white;
			border-radius: 0.5rem;
			background-color: $color-brand-2-light;
			opacity: 0;

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
			opacity: 0;
			transform: translate(-50%, -1.5rem) scale(1);
		}
		10% {
			opacity: 1;
			transform: translate(-50%, -3rem) scale(1);
		}
		15% {
			opacity: 1;
			transform: translate(-50%, -3rem) scale(1.1);
		}
		20% {
			opacity: 1;
			transform: translate(-50%, -3rem) scale(1);
		}
		90% {
			opacity: 1;
			transform: translate(-50%, -3rem) scale(1);
		}
		100% {
			opacity: 0;
			transform: translate(-50%, -1.5rem) scale(1);
		}
	}

	.fadeUp-enter-active {
		animation: fadeUp 2s ease-in-out 0s forwards;
	}
</style>
