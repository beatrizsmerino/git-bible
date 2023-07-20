<template>
	<footer class="footer">
		<div class="footer__copyright footer__item">
			<p>© Copyright 2019-{{ currentYear }}. Git Bible. @beatrizsmerino</p>
		</div>

		<div class="footer__nav footer__item">
			<nav class="nav">
				<router-link
					to="/bibliografy"
					class="nav__item"
				>
					Bibliografy
				</router-link>
			</nav>
		</div>
	</footer>
</template>

<script>
	export default {
		"name": "PageFooter",
		data() {
			return {
				"currentYear": new Date().getFullYear(),
			};
		},
	};
</script>

<style lang="scss" scoped>
	.footer {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 1.6rem 3.2rem;
		background-color: $color-brand-1;
		color: rgba($color-white, 0.7);
		font-size: 1.6rem;

		@include media("sm") {
			flex-direction: column-reverse;
			text-align: center;
		}

		&__item {
			&:not(:first-child) {
				@include media("sm") {
					margin-bottom: 0.5rem;
				}
			}
		}
	}

	a {
		color: rgba($color-white, 0.7);

		&:hover,
		&.router-link-active {
			color: $color-white;
		}
	}
</style>
