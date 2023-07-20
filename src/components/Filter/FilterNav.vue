<template>
	<div
		class="filter-nav"
		:class="{ 'is-open': isOpen }"
	>
		<div
			v-closable="{
				exclude: ['buttonFilter'],
				handler: 'closeFilter',
			}"
			class="filter-nav__inner"
		>
			<button
				ref="buttonFilter"
				class="filter-nav__button"
				@click="openCloseFilter"
			>
				<span class="bg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 366 730"
					>
						<path
							d="M317.638,0V44.353c0,52.1-32.216,89.512-86.9,101.005a151.174,151.174,0,0,1-22.577,2.893C70.024,156.038.623,258.217,0,360.818H0v0H0C.623,463.424,70.024,565.6,208.157,573.39a151.043,151.043,0,0,1,22.577,2.893c54.688,11.493,86.9,48.9,86.9,101.005V730H366V0Z"
						/>
					</svg>
				</span>
				<i class="icon">
					<font-awesome-icon :icon="['fas', 'filter']" />
				</i>
			</button>

			<div class="filter-nav__content">
				<h1 class="filter-nav__title">
					Filter
				</h1>

				<div class="filter-nav__type">
					<h2 class="filter-nav__subtitle">
						Languages
					</h2>

					<div class="filter-nav__subcontent">
						<UILanguages />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import UILanguages from "@/components/UI/UILanguages";

	let handleOutsideClick = null;

	Vue.directive("closable", {
		bind(element, binding, vnode) {
			// Here's the click/touchstart handler (it is registered below)
			handleOutsideClick = event => {
				event.stopPropagation();

				// Get the handler method name and the exclude array from the object used in v-closable
				const { handler, exclude } = binding.value;

				// This variable indicates if the clicked element is excluded
				let clickedOnElementExcluded = false;
				exclude.forEach(refName => {
					// We only run this code if we haven't detected any excluded element yet
					if (!clickedOnElementExcluded) {
						// Get the element using the reference name
						const elementExcluded = vnode.context.$refs[refName];

						if (typeof elementExcluded !== "undefined") {
							// See if this excluded element is the same element the user just clicked on
							clickedOnElementExcluded = elementExcluded.contains(event.target);
						}
					}
				});

				// We check to see if the clicked element is not the dialog element and not excluded
				if (!element.contains(event.target) && !clickedOnElementExcluded) {
					// If the clicked element is outside the dialog and not the button, then call the outside-click handler from the same component this directive is used in
					vnode.context[handler]();
				}
			};

			// Register click/touchstart event listeners on the whole page
			document.addEventListener("click", handleOutsideClick);
			document.addEventListener("touchstart", handleOutsideClick);
		},

		unbind() {
			// If the element that has v-closable is removed, then unbind click/touchstart listeners from the whole page
			document.removeEventListener("click", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
		},
	});

	export default {
		"name": "UIFilterNav",
		"components": {
			UILanguages,
		},
		data() {
			return {
				"isOpen": false,
			};
		},
		"watch": {
			isOpen() {
				document.body.style.overflow = this.isOpen ? "hidden" : "";
			},
		},
		"methods": {
			openCloseFilter() {
				this.isOpen = !this.isOpen;
			},
			closeFilter() {
				this.isOpen = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.filter-nav {
		display: flex;
		position: fixed;
		z-index: 9999;
		top: 0;
		right: 0;
		justify-content: flex-end;
		width: 100%;
		height: 100%;
		transition: all 0.4s ease-in-out 0.3s;
		pointer-events: none;

		&__inner {
			position: relative;
			width: 80%;
			max-width: 40rem;
			height: 100%;
			transform: translate3d(100%, 0, 0);
			transition: all 0.5s ease-in-out 0s;
			background-color: $color-white;
			pointer-events: all;
		}

		&__button {
			position: absolute;
			z-index: -1;
			top: 10rem;
			left: calc(-4.35rem - 0.8rem);
			width: 5rem;
			transition: all 0.5s ease-in-out 0s;
			border: 0;
			background-color: transparent;
			cursor: pointer;

			.bg {
				width: 100%;
				transition: all 0.5s ease-in-out 0s;
				fill: $color-brand-2-light;
			}

			.icon {
				position: absolute;
				top: 50%;
				left: 1.2rem;
				margin-right: 1rem;
				transform: translate3d(0, -50%, 0);
				transition: all 0.5s ease-in-out 0s;
				color: $color-light;
				font-size: 1.8rem;
				pointer-events: none;

				&:before {
					content: "Filter";
					display: inline-block;
					position: absolute;
					top: 50%;
					left: 1.6rem;
					transform: rotate(-90deg) translate(-50%, 0);
					transform-origin: 0 0;
					font-size: 1.5rem;
					font-style: initial;
					font-weight: 500;
				}
			}

			&:hover {
				.filter-nav {
					&__button {
						.icon {
							color: $color-white;
						}
					}
				}
			}
		}

		&__content {
			width: 100%;
			height: 100%;
			padding: 12rem 2rem 4rem;
			transform: translate(-0.8rem, 0);
			transition: all 0.5s ease-in-out 0s;
			border-left: 0.8rem solid $color-brand-2-light;
			background-color: $color-white;
		}

		&__title {
			margin-bottom: 3rem;
		}

		&__subtitle {
			margin-bottom: 1rem;
			color: $color-brand-1;
			font-size: 2rem;
		}

		&.is-open {
			background-color: rgba($color-black, 0.5);
			pointer-events: all;

			.filter-nav {
				&__inner {
					transform: translate3d(0, 0, 0);
				}

				&__button {
					left: -4.35rem;

					.bg {
						width: 100%;
						fill: $color-white;
					}

					.icon {
						color: $color-black;
					}

					&:hover {
						.filter-nav {
							&__button {
								.icon {
									color: $color-brand-1;
								}
							}
						}
					}
				}

				&__content {
					transform: translate(0, 0);
					border-left: 0.8rem solid $color-white;
				}
			}
		}
	}
</style>
