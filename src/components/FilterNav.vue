<template>
	<div
		class="filter__wrapper"
		:class="{'is-open': isOpen}"
	>
		<div class="filter">
			<button
				class="filter__button"
				@click="openCloseFilter"
			>

				<span class="filter__button-bg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 366 730"
					>
						<path d="M317.638,0V44.353c0,52.1-32.216,89.512-86.9,101.005a151.174,151.174,0,0,1-22.577,2.893C70.024,156.038.623,258.217,0,360.818H0v0H0C.623,463.424,70.024,565.6,208.157,573.39a151.043,151.043,0,0,1,22.577,2.893c54.688,11.493,86.9,48.9,86.9,101.005V730H366V0Z" />
					</svg>
				</span>
				<i class="filter__button-icon">
					<font-awesome-icon :icon="['fas', 'filter']" />
				</i>
			</button>

			<div class="filter__inner">
				<h1 class="filter__title">
					{{ $t('hello.world') }}
				</h1>

				<div class="filter__content">
					<ul class="filter-list">
						<li class="filter-list__item">
							<h2 class="filter-list__title">
								Languages
							</h2>
							<div class="filter-list__content">
								<ButtonsLanguages />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ButtonsLanguages from "@/components/Button/ButtonsLanguages";

	export default {
		name: 'FilterNav',
		components: {
			ButtonsLanguages
		},
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
		height: 100%;
		position: relative;
		background-color: $color-white;
		transform: translate3d(100%, 0, 0);
		pointer-events: auto;
		transition: all 0.5s ease-in-out 0s;

		&__wrapper {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			right: 0;
			z-index: 9999;
			display: flex;
			justify-content: flex-end;
			pointer-events: none;
			transition: all 0.4s ease-in-out 0.3s;

			&.is-open {
				pointer-events: auto;
				background-color: rgba($color-black, 0.5);

				.filter {
					transform: translate3d(0, 0, 0);

					&__button {
						left: -4.35rem;

						&-bg {
							width: 100%;
							fill: $color-white;
						}

						&-icon {
							color: $color-black;
						}

						&:hover {
							.filter {
								&__button {
									&-icon {
										color: $color-brand-1;
									}
								}
							}
						}
					}

					&__inner {
						border-left: 0.8rem solid $color-white;
						transform: translate(0, 0);
					}
				}
			}
		}

		&__button {
			width: 5rem;
			position: absolute;
			top: 10rem;
			left: calc(-4.35rem - 0.8rem);
			z-index: -1;
			border: none;
			background-color: transparent;
			cursor: pointer;
			transition: all 0.5s ease-in-out 0s;

			&:hover {
				.filter {
					&__button {
						&-icon {
							color: $color-white;
						}
					}
				}
			}

			&-bg {
				width: 100%;
				fill: $color-brand-2-light;
				transition: all 0.5s ease-in-out 0s;
			}

			&-icon {
				margin-right: 1rem;
				position: absolute;
				top: 50%;
				left: 1.2rem;
				transform: translate3d(0, -50%, 0);
				font-size: 1.8rem;
				color: $color-light;
				pointer-events: none;
				transition: all 0.5s ease-in-out 0s;

				&:before {
					content: "Filter";
					display: inline-block;
					position: absolute;
					top: 50%;
					left: 1.6rem;
					transform-origin: 0 0;
					transform: rotate(-90deg) translate(-50%, 0);
					font-weight: 500;
					font-style: initial;
					font-size: 1.5rem;
				}
			}
		}

		&__inner {
			width: 100%;
			height: 100%;
			padding: 4rem 2rem;
			border-left: 0.8rem solid $color-brand-2-light;
			background-color: $color-white;
			transform: translate(-0.8rem, 0);
			transition: all 0.5s ease-in-out 0s;
		}

		&__title {
			margin-bottom: 3rem;
		}

		&__content {
			overflow-y: scroll;
		}
	}

	.filter-list {
		list-style: none;

		&__item {
			&:not(:last-child) {
				margin-bottom: 2rem;
			}
		}

		&__title {
			margin-bottom: 1rem;
			font-size: 2rem;
			color: $color-brand-1;
		}
	}
</style>