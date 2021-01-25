<template>
	<div class="list-buttons">
		<Button
			v-for="(language) in languages"
			:key="language.locale"
			@emit-click="changeLanguage(language.locale)"
			:class="[(language.locale == $i18n.locale) ? 'button--bg-color-1': 'button--bg-color-2-light']"
		>
			{{ language.title }}
		</Button>
	</div>
</template>

<script>
	import { i18n } from '@/plugins/i18n';
	import Button from "@/components/Button/Button";

	export default {
		name: 'ButtonsLanguages',
		components: {
			Button
		},
		computed: {
			languages() {
				return [
					{ locale: 'es', title: this.$t('language.spanish') },
					{ locale: 'en', title: this.$t('language.english') }
				]
			}
		},
		methods: {
			changeLanguage(locale) {
				i18n.locale = locale
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-buttons {
		display: flex;

		> * {
			flex: 1;

			&:not(:last-child){
				margin-right: 1rem;
			}
		}
	}
</style>