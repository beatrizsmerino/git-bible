<template>
	<ul class="list-references">
		<li
			v-for="(reference, index) in references"
			:key="`reference-${index}`"
			class="reference"
			:data-index="index"
		>
			<a
				class="reference__link"
				:href="reference.url"
				target="_blank"
			>
				<p class="reference__description">
					{{reference.description}}
				</p>
				<p class="reference__url">
					<i class="reference__url-icon">
						<font-awesome-icon :icon="['fas', 'link']" />
					</i>

					<span class="reference__url-text text-ellipsis">
						{{reference.url}}
					</span>
				</p>
			</a>
		</li>
	</ul>
</template>



<script>
	import data from "../data/data-references.json";

	export default {
		name: 'ListReferences',
		data() {
			return {
				references: []
			};
		},
		created() {
			this.references = data
		}
	};
</script>



<style lang="scss" scoped>
	.list-references {
		list-style: none;
	}

	.reference {
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 1.92rem;
		background-color: $color-light;

		&:hover {
			background-color: $color-silver;

			.reference__link {
				color: $color-brand-2;
			}
		}

		&:not(:last-child) {
			margin-bottom: 1.6rem;
		}

		&__link {
			width: 100%;
			padding: 1.92rem 3.2rem;
			color: $color-brand-3;
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

		&__description {
			color: $color-brand-2;
		}
	}
</style>