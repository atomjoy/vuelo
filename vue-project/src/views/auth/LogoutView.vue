<script>
import Title from '@/components/PageTitle.vue'
import { useAuthStore } from '@/stores/auth.js'

export default {
	data() {
		return {
			auth: useAuthStore(),
		}
	},
	mounted() {
		if (this.auth.isUserLogged == true) {
			setTimeout(async () => {
				await this.auth.logoutUser()
				this.$i18n.locale = this.$i18n.fallbackLocale
				this.$router.push('/')
			}, 1000)
		} else {
			this.$router.push('/')
		}
	},
}
</script>

<template>
	<Title title="text.logout.title" />

	<h1>{{ $t('text.logout.message') }}</h1>
</template>

<style scoped>
h1 {
	float: left;
	width: 100%;
	padding: 60px 2rem;
	text-align: center;
	font-weight: 900;
	color: var(--color);
}
</style>
