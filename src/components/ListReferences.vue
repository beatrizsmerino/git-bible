<template>
	<ul class="list-references">
		<li v-for="reference in references" :key="reference.id" class="reference">
			<a class="reference__link" :href="reference.url" target="_blank">
				<p class="reference__description">
					{{reference.description}}
				</p>
				<p>
					<i class="reference__link-icon">
						<font-awesome-icon :icon="['fas', 'link']"/>
					</i>

					<span class="reference__link-text">
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
		width: 90%;
		margin: 0 auto;
		list-style: none;
	}

	.reference {
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		background-color: $color-light;

		&:hover{
			background-color: $color-silver;

			.reference__link{
				color: $color-brand-2;
			}
		}

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		&__link{
			width: 100%;
			padding: 1.2rem 2rem;
			color: $color-brand-3;
		}

		&__link-icon{
			margin-right: 0.5rem;
		}

		&__link-text {
			
		}

		&__description {
			color: $color-brand-2;
		}
	}
</style>