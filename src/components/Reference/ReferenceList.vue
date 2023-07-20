<template>
	<ul class="reference-list">
		<li
			v-for="(item, index) in referenceList"
			:key="`reference-${index}`"
			class="reference-list__item"
			:data-index="index"
		>
			<ReferenceItem :reference-item="item" />
		</li>
	</ul>
</template>

<script>
	import data from "../../data/data-references.json";
	import ReferenceItem from "@/components/Reference/ReferenceItem";

	export default {
		"name": "ReferenceList",
		"components": {
			ReferenceItem,
		},
		data() {
			return {
				"referenceList": [],
			};
		},
		created() {
			this.referenceList = data;
		},
	};
</script>

<style lang="scss" scoped>
	.reference-list {
		list-style: none;

		&__item {
			&:not(:last-child) {
				margin-bottom: 1.6rem;
			}
		}
	}
</style>
