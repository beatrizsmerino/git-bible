/** 
 * @file i18n.js Plugin traductor
 * @description Configure the app to make it multilingual
 * Medium info: https://medium.com/@pablosirera/a%C3%B1adir-i18n-en-una-aplicaci%C3%B3n-vue-ebeb8e5c60b2
 **/

import Vue from 'vue';
import VueI18n from 'vue-i18n';



import commandsENData from "../data/en/data-commands.json";
import commandsESData from "../data/es/data-commands.json";

Vue.use(VueI18n);

const messages = {
	es: {
		language:{
			spanish: 'Español',
			english: 'Inglés',
		},
		commands: commandsESData
	},
	en: {
		language: {
			spanish: 'Spanish',
			english: 'English',
		},
		commands: commandsENData
	}
}

const i18n = new VueI18n({
	// Default browser language:
	// locale: window.navigator.language.split('-')[0]
	locale: 'en',
	fallbackLocale: 'es',
	messages
})

export { i18n }