<template>
	<div class="reference-item">
		<a
			class="reference-item__link"
			:href="referenceItem.url"
			target="_blank"
		>
			<p class="reference-item__description">
				{{ referenceItem.description }}
			</p>
			<p class="reference-item__url">
				<i class="reference-item__url-icon">
					<font-awesome-icon :icon="['fas', 'link']" />
				</i>

				<span class="reference-item__url-text text-ellipsis">
					{{ referenceItem.url }}
				</span>
			</p>
		</a>
	</div>
</template>

<script>
	export default {
		"name": "ReferenceItem",
		"props": {
			"referenceItem": {
				"type": Object,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.reference-item {
		display: flex;
		align-items: center;
		width: 100%;

		&__link {
			width: 100%;
			padding: 1.92rem 3.2rem;
			background-color: $color-light;
			color: $color-brand-3;
			font-size: 1.92rem;

			@include media("sm") {
				padding: 1.5rem;
				font-size: 1.5rem;
			}

			&:hover {
				background-color: $color-silver;
				color: $color-brand-2;
			}
		}

		&__description {
			color: $color-brand-2;

			@include media("sm") {
				margin-bottom: 0.5rem;
			}
		}

		&__url {
			display: flex;
			align-items: center;
		}

		&__url-icon {
			margin-right: 0.8rem;

			@include media("sm") {
				margin-right: 0.5rem;
				font-size: 1.2rem;
			}
		}

		&__url-text {
			max-width: 120rem;
		}
	}
</style>
