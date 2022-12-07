<script setup>
import { onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

const { t, locale } = useI18n({ useScope: 'global' })

onMounted(async () => {
	// Set server locale
	const res = await axios.get('web/api/locale/' + locale.value)
	console.log('App set locale', locale.value, res.data.alert)
})
</script>

<template>
	<RouterView />
</template>
