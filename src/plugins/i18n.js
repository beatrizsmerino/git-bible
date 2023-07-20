// @file i18n.js Plugin traductor
// @description Configure the app to make it multilingual
// Medium info: https://medium.com/@pablosirera/a%C3%B1adir-i18n-en-una-aplicaci%C3%B3n-vue-ebeb8e5c60b2

import Vue from "vue";
import VueI18n from "vue-i18n";

import commandListENData from "../data/en/data-commands.json";
import commandListESData from "../data/es/data-commands.json";

Vue.use(VueI18n);

const messages = {
	"es": {
		"language": {
			"spanish": "Español",
			"english": "Inglés",
		},
		"commandList": commandListESData,
	},
	"en": {
		"language": {
			"spanish": "Spanish",
			"english": "English",
		},
		"commandList": commandListENData,
	},
};

const i18n = new VueI18n({

	// Default browser language:
	// locale: window.navigator.language.split('-')[0]
	"locale": "en",
	"fallbackLocale": "es",
	messages,
});

export { i18n };
