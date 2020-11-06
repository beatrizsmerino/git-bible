<template>
	<div class="reference">
		<a
			class="reference__link"
			:href="dataReference.url"
			target="_blank"
		>
			<p class="reference__description">
				{{dataReference.description}}
			</p>
			<p class="reference__url">
				<i class="reference__url-icon">
					<font-awesome-icon :icon="['fas', 'link']" />
				</i>

				<span class="reference__url-text text-ellipsis">
					{{dataReference.url}}
				</span>
			</p>
		</a>
	</div>
</template>



<script>
	export default {
		name: 'Reference',
		props: {
			dataReference: Object
		}
	};
</script>



<style lang="scss" scoped>
	.reference {
		width: 100%;
		display: flex;
		align-items: center;

		&__link {
			width: 100%;
			padding: 1.92rem 3.2rem;
			font-size: 1.92rem;
			color: $color-brand-3;
			background-color: $color-light;

			&:hover {
				color: $color-brand-2;
				background-color: $color-silver;
			}
		}

		&__description {
			color: $color-brand-2;
		}

		&__url {
			display: flex;
			align-items: center;
		}

		&__url-icon {
			margin-right: 0.8rem;
		}

		&__url-text {
			max-width: 120rem;
		}
	}
</style>