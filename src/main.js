import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLink, faCodeBranch, faClone, faTerminal, faFilter} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome';
import VueClipboard from 'vue-clipboard2';
import {i18n} from '@/plugins/i18n';

library.add(faLink, faCodeBranch, faClone, faTerminal, faFilter);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.component('FontAwesomeLayers', FontAwesomeLayers);
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText);

Vue.use(VueClipboard);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	i18n,
	render: h => h(App)
});
