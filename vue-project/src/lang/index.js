import messages from './messages.js'

// set in .env file
const locale = import.meta.env.VITE_LOCALE ?? 'en'
const locales = import.meta.env.VITE_AVAILABLE_LOCALES ?? 'en|pl'
console.log('Locale .env', locale, locales)

const availableLocales = locales.split('|')

const lang = {
	allowComposition: true, // Allow compositions api
	locale: locale ?? 'en', // set locale
	fallbackLocale: locale ?? 'en', // set fallback locale
	availableLocales: availableLocales ?? ['en', 'pl'], // available locales
	messages: messages,
}

export default lang
