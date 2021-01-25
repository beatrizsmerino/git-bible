<template>
	<div class="list-buttons">
		<Button
			v-for="(language) in languages"
			:key="language.locale"
			@emit-click="changeLanguage(language.locale)"
			class="button--bg-color-1"
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
					{ locale: 'es', title: this.$t('spanish') },
					{ locale: 'en', title: this.$t('english') }
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
			margin-right: 1rem;
		}
	}
</style>