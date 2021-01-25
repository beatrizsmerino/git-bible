<template>
	<div
		class="filter"
		:class="{'is-open': isOpen}"
	>
		<button
			class="filter__button"
			@click="openCloseFilter"
		>

			<span class="filter__button-bg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 366 730"
				>
					<path d="M247,119L247,119c-0.3,0-0.7,0-1,0C110.1,119,0,229.1,0,365s110.1,246,246,246c0.3,0,0.7,0,1,0v0
		c65.7,0,119,53.3,119,119V0C366,65.7,312.7,119,247,119z" />
				</svg>
			</span>
			<i class="filter__button-icon">
				<font-awesome-icon :icon="['fas', 'filter']" />
			</i>
		</button>

		<div class="filter__content">

		</div>
	</div>
</template>

<script>
	export default {
		name: 'FilterNav',
		data() {
			return {
				isOpen: false
			}
		},
		methods: {
			openCloseFilter() {
				this.isOpen = !this.isOpen;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.filter {
		width: 80%;
		max-width: 40rem;
		height: calc(100% - 8rem);
		position: fixed;
		top: 8rem;
		right: 0;
		z-index: 999;
		background-color: $color-white;
		border-left: 0.8rem solid $color-brand-2-light;
		transform: translate3d(100%, 0, 0);
		transition: all 0.5s ease-in-out 0s;

		@include media("sm") {
			top: 6rem;
			height: calc(100% - 6rem);
		}

		&__button {
			width: 5rem;
			position: absolute;
			top: 2rem;
			left: -5rem;
			z-index: -1;
			border: none;
			background-color: transparent;
			cursor: pointer;

			&:hover {
				.filter {
					&__button-icon {
						color: $color-white;
					}
				}
			}
		}

		&__button-bg {
			width: 100%;
			fill: $color-brand-2-light;
		}

		&__button-icon {
			margin-right: 1rem;
			position: absolute;
			top: 50%;
			left: 1.5rem;
			transform: translate3d(0, -50%, 0);
			font-size: 2rem;
			color: $color-light;
			pointer-events: none;
		}

		&__content {
			width: 100%;
			height: 100%;
			background-color: $color-white;
		}

		&.is-open {
			transform: translate3d(0, 0, 0);
		}
	}
</style>