
window.axios = require('axios');
window._ = require('lodash');

import Vue from 'vue';
import vuetify from './vuetify.js';

import router from './routes.js';
import App from './views/App';

const app = new Vue({
    router,
    vuetify,
    el: '#app',
    render: h => h(App)
});

export default app;