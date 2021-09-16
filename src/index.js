import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App'

import MESSAGES_EN_GB from './messages.en_GB'
import MESSAGES_RU_RU from './messages.ru_RU'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'en_GB',
    messages: {
        en_GB: MESSAGES_EN_GB,
        ru_RU: MESSAGES_RU_RU,
    },
})

const app = new Vue({
    i18n,
    render: h => h(App),
})

app.$mount('#app')