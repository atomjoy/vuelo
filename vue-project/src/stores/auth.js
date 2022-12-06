import { defineStore } from 'pinia'
import router from '../router'
import axios from 'axios'

// set in .env file
const debug = import.meta.env.VITE_AUTH_STORE_DEBUG
console.log('Auth store debug', debug)

export const useAuthStore = defineStore('auth', {
	state: () => ({
		alert: null, // { message: '', type: 'danger|success|error' },
		debug: debug,
		authenticated: false,
		user: null,
		axios_error: 'Connection error',
		visibleSidebar: false,
		availableMessages: false,
	}),
	getters: {
		isUserLogged: (state) => state.authenticated,
		getAlert: (state) => state.alert,
	},
	actions: {
		updateAxiosError(str) {
			this.axios_error = str
		},
		setAlert(res) {
			this.alert = res.data.alert
		},
		errorMsg(axios_error) {
			if (axios_error.response) {
				this.alert = axios_error.response.data.alert ?? null
			} else {
				this.alert = { message: this.axios_error, type: 'error' }
			}
			alert('Ups! ' + this.axios_error)
			console.log('Ups! ' + this.axios_error, axios_error)
		},
		setUnauthenticated() {
			this.user = null
			this.authenticated = false
		},
		setAuthenticated(res) {
			const user = res.data.bag.user ?? null
			if (user && user.id && user.role && user.email && user.username) {
				this.user = user
				this.authenticated = true
			} else {
				this.user = null
				this.authenticated = false
			}
		},
		async isAuthenticated() {
			try {
				let res = await axios.get('/web/api/logged')
				if (res.data.alert.type == 'success') {
					this.setAuthenticated(res)
				} else {
					this.setUnauthenticated()
				}
				this.log('Response', res.data.alert)
			} catch (error) {
				this.errorMsg(error)
			}
		},
		async loginUser(data) {
			this.scrollTop
			try {
				let res = await axios.post('/web/api/login', data)
				if (res.data.alert.type == 'success') {
					this.setAuthenticated(res)
					this.setAlert(res)
					router.push('/panel')
				} else {
					this.setAlert(res)
				}
				this.log('Response', res.data.alert)
			} catch (error) {
				this.errorMsg(error)
			}
		},
		async logoutUser() {
			try {
				let res = await axios.get('/web/api/logout')
				this.user = null
				this.setAlert(res)
				this.setUnauthenticated()
				this.log('Response', res.data.alert)
			} catch (error) {
				this.errorMsg(error)
			}
		},
		async registerUser(data) {
			this.scrollTop
			try {
				let res = await axios.post('/web/api/register', data)

				if (res.data.alert.type == 'success') {
					this.setAlert(res)
				} else {
					this.setAlert(res)
				}
				this.log('Response', res.data.alert)
			} catch (error) {
				this.errorMsg(error)
			}
		},
		async resetUser(data) {
			this.scrollTop
			try {
				let res = await axios.post('/web/api/reset', data)

				if (res.data.alert.type == 'success') {
					this.setAlert(res)
				} else {
					this.setAlert(res)
				}
				this.log('Response', res.data.alert)
			} catch (error) {
				this.errorMsg(error)
			}
		},
		async changePassUser(data) {
			this.scrollTop
			try {
				let res = await axios.post('/web/api/change-password', data)

				if (res.data.alert.type == 'success') {
					this.setAlert(res)
				} else {
					this.setAlert(res)
				}
				this.log('Response', res.data.alert)
			} catch (error) {
				this.errorMsg(error)
			}
		},
		async activateUser(id, code) {
			this.scrollTop
			try {
				let res = await axios.get('/web/api/activate/' + id + '/' + code)

				if (res.data.alert.type == 'success') {
					this.setAlert(res)
				} else {
					this.setAlert(res)
				}
				this.log('Response', res.data.alert)
			} catch (error) {
				this.errorMsg(error)
			}
		},
		async changeLocale(locale) {
			try {
				let res = await axios.get('/web/api/locale/' + locale)
				this.log('Response', res.data.alert)
			} catch (error) {
				this.errorMsg(error)
			}
		},
		showSidebar() {
			this.visibleSidebar = !this.visibleSidebar
		},
		scrollTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		},
		log(msg, val = null) {
			if (this.debug == true) {
				console.log(msg, val)
			}
		},
	},
})
