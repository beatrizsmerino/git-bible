<template>
	<ul class="list-references">
		<li
			class="list-references__item"
			v-for="(reference, index) in references"
			:key="`reference-${index}`"
			:data-index="index"
		>
			<Reference :dataReference="reference" />
		</li>
	</ul>
</template>



<script>
	import data from "../data/data-references.json";
	import Reference from "@/components/Reference";


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
			this.references = data
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