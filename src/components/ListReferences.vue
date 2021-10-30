<template>
	<ul class="list-references">
		<li
			v-for="(reference, index) in references"
			:key="`reference-${index}`"
			class="list-references__item"
			:data-index="index"
		>
			<Reference :data-reference="reference" />
		</li>
	</ul>
</template>

<script>
	import data from '../data/data-references.json';
	import Reference from '@/components/Reference';

	export default {
		name: 'ListReferences',
		components: {
			Reference
		},
		data() {
			return {
				references: []
			};
		},
		created() {
			this.references = data;
		}
	};
</script>

<style lang="scss" scoped>
	.list-references {
		list-style: none;

		&__item {
			&:not(:last-child) {
				margin-bottom: 1.6rem;
			}
		}
	}
</style>
