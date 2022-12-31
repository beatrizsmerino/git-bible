<template>
	<div class="list-buttons">
		<UIButton
			v-for="language in languages"
			:key="language.locale"
			:class="[
				language.locale == $i18n.locale
					? 'button--bg-color-1'
					: 'button--bg-color-2-light',
			]"
			@emit-click="changeLanguage(language.locale)"
		>
			{{ language.title }}
		</UIButton>
	</div>
</template>

<script>
	import {
		i18n
	} from "@/plugins/i18n";
	import UIButton from "@/components/UI/UIButton";

	export default {
		name: "UILanguages",
		components: {
			UIButton
		},
		computed: {
			languages() {
				return [
					{
						locale: "es",
						title: this.$t("language.spanish")
					},
					{
						locale: "en",
						title: this.$t("language.english")
					}
				];
			}
		},
		methods: {
			changeLanguage(locale) {
				i18n.locale = locale;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.list-buttons {
		display: flex;

		> * {
			flex: 1;

			&:not(:last-child) {
				margin-right: 1rem;
			}
		}
	}
</style>
