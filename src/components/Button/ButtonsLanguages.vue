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
		data: () => ({
			languages: [
				{ locale: 'es', title: 'Español' },
				{ locale: 'en', title: 'Inglés' }
			]
		}),
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