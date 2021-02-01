<template>
	<button
		class="button-copy"
		aria-label="Copy text"
		v-clipboard:copy="textToCopy"
		v-clipboard:success="onSuccess"
		v-clipboard:error="onError"
	>
		<i class="button-copy-text__icon">
			<font-awesome-icon :icon="['fas', 'clone']" />
		</i>

		<transition name="fadeUp">
			<span
				class="button-copy__message button-copy__message--success"
				v-if="status === true"
			>
				Copied!
			</span>
			<span
				class="button-copy__message button-copy__message--success"
				v-if="status === false"
			>
				Press CTRL+C to copy
			</span>
		</transition>
	</button>
</template>



<script>
	export default {
		name: 'ButtonCopy',
		data() {
			return {
				status: null,
			}
		},
		props: {
			textToCopy: String
		},
		methods: {
			resetStatus: function () {
				this.status = null;
			},
			onSuccess: function () {
				this.status = true;
				setTimeout(() => this.resetStatus(), 5000);
			},
			onError: function () {
				this.status = false;
				setTimeout(() => this.resetStatus(), 5000);
			},
		},
	}
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