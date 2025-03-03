import { createI18n } from 'vue-i18n'
import en from './en.json'
import bm from './bm.json'

const i18n = createI18n({
	legacy: false,
	locale: 'bm',
	fallbackLocale: 'bm',
	globalInjection: true,
	messages: {en,bm},
});

export default i18n