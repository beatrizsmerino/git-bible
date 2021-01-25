import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLink, faCodeBranch, faClone, faTerminal, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import VueClipboard from 'vue-clipboard2';

library.add(
	faLink,
	faCodeBranch,
	faClone,
	faTerminal,
	faFilter
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.use(VueClipboard);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	render: h => h(App)
});
