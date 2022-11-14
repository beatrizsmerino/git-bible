<template>
	<div
		class="filter-nav"
		:class="{ 'is-open': isOpen }"
	>
		<div
			v-closable="{
				exclude: ['buttonFilter'],
				handler: 'closeFilter'
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
						<path d="M317.638,0V44.353c0,52.1-32.216,89.512-86.9,101.005a151.174,151.174,0,0,1-22.577,2.893C70.024,156.038.623,258.217,0,360.818H0v0H0C.623,463.424,70.024,565.6,208.157,573.39a151.043,151.043,0,0,1,22.577,2.893c54.688,11.493,86.9,48.9,86.9,101.005V730H366V0Z" />
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

				<ul class="filter-nav__list">
					<li class="filter-nav__item">
						<h2 class="filter-nav__subtitle">
							Languages
						</h2>

						<div class="filter-nav__subcontent">
							<UILanguages />
						</div>
					</li>

					<li class="filter-nav__item">
						<h2 class="filter-nav__subtitle">
							Categories
						</h2>

						<div class="filter-nav__subcontent">
							<Tag
								:tag-list="getCategories"
								:tag-type="'filter'"
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import UILanguages from '@/components/UI/UILanguages';
	import Tag from '@/components/Tag';

	let handleOutsideClick;

	Vue.directive('closable', {
		bind(element, binding, vnode) {
			// Here's the click/touchstart handler (it is registered below)
			handleOutsideClick = event => {
				event.stopPropagation();

				// Get the handler method name and the exclude array from the object used in v-closable
				const {handler, exclude} = binding.value;

				// This variable indicates if the clicked element is excluded
				let clickedOnElementExcluded = false;
				exclude.forEach(refName => {
					// We only run this code if we haven't detected any excluded element yet
					if (!clickedOnElementExcluded) {
						// Get the element using the reference name
						const elementExcluded = vnode.context.$refs[refName];

						if (typeof elementExcluded !== 'undefined') {
							// See if this excluded element is the same element the user just clicked on
							clickedOnElementExcluded = elementExcluded.contains(event.target);
						}
					}
				});

				// We check to see if the clicked element is not the dialog element and not excluded
				if (
					!element.contains(event.target) &&
					!clickedOnElementExcluded
				) {
					// If the clicked element is outside the dialog and not the button, then call the outside-click handler from the same component this directive is used in
					vnode.context[handler]();
				}
			};

			// Register click/touchstart event listeners on the whole page
			document.addEventListener('click', handleOutsideClick);
			document.addEventListener('touchstart', handleOutsideClick);
		},

		unbind() {
			// If the element that has v-closable is removed, then unbind click/touchstart listeners from the whole page
			document.removeEventListener('click', handleOutsideClick);
			document.removeEventListener('touchstart', handleOutsideClick);
		}
	});

	export default {
		name: 'FilterNav',
		components: {
			UILanguages,
			Tag
		},
		props: {
			commandList: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				isOpen: false
			};
		},
		computed: {
			getCategories() {
				const categoryList = [];
				this.commandList.forEach(command => command.categories.forEach(category => {
					if (!categoryList.includes(category)) {
						categoryList.push(category);
					}
				}));

				return categoryList;
			}
		},
		watch: {
			isOpen() {
				document.body.style.overflow = this.isOpen ? 'hidden' : '';
			}
		},
		methods: {
			openCloseFilter() {
				this.isOpen = !this.isOpen;
			},
			closeFilter() {
				this.isOpen = false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.filter-nav {
		width: 100%;
		height: calc(100% - 8rem);
		position: fixed;
		top: 8rem;
		right: 0;
		z-index: 9999;
		display: flex;
		justify-content: flex-end;
		pointer-events: none;
		transition: all 0.4s ease-in-out 0.3s;

		@include media('md') {
			height: calc(100% - 6rem);
			top: 6rem;
		}

		&__inner {
			width: 80%;
			max-width: 40rem;
			height: 100%;
			position: relative;
			background-color: $color-white;
			transform: translate3d(100%, 0, 0);
			pointer-events: all;
			transition: all 0.5s ease-in-out 0s;
		}

		&__button {
			width: 5rem;
			position: absolute;
			top: 4rem;
			left: calc(-4.35rem - 0.8rem);
			z-index: -1;
			border: none;
			background-color: transparent;
			cursor: pointer;
			transition: all 0.5s ease-in-out 0s;

			.bg {
				width: 100%;
				fill: $color-brand-2-light;
				transition: all 0.5s ease-in-out 0s;
			}

			.icon {
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
					content: 'Filter';
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
			padding: 4rem 2rem;
			overflow: auto;
			border-left: 0.8rem solid $color-brand-2-light;
			background-color: $color-white;
			transform: translate(-0.8rem, 0);
			transition: all 0.5s ease-in-out 0s;
		}

		&__title {
			margin-bottom: 3rem;
		}

		&__list {
			list-style: none;
		}

		&__item {
			&:not(:last-child) {
				margin-bottom: 2rem;
			}
		}

		&__subtitle {
			margin-bottom: 1rem;
			font-size: 2rem;
			color: $color-brand-1;
		}

		&__subcontent {
			//max-height: 20rem;
			//overflow: auto;
		}

		&.is-open {
			pointer-events: all;
			background-color: rgba($color-black, 0.5);

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
					border-left: 0.8rem solid $color-white;
					transform: translate(0, 0);
				}
			}
		}
	}
</style>
