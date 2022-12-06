<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import PageItem from '@/components/pages/PageItem.vue'
import Alert from '@/components/Alert.vue'
import Title from '@/components/PageTitle.vue'
import { useAuthStore } from '@/stores/auth.js'

const refresh = ref(1)
const message = ref('Ups...!')
const type = ref('success')
const auth = useAuthStore()
const route = useRoute()

onMounted(async () => {
	await auth.activateUser(route.params.id, route.params.code)
	auth.scrollTop()

	message.value = auth.alert.message
	type.value = auth.alert.type

	auth.log('onActivate', auth.alert)
})
</script>

<template>
	<Title title="activate.title" />

	<PageItem>
		<template #content>
			<form method="post" class="form">
				<h2>{{ $t('activate.form_title') }}</h2>

				<Alert v-if="message" :msg="message" :type="type" />

				<div class="form_links">
					<router-link to="/login">{{ $t('activate.login_link') }}</router-link>
					<router-link to="/register">{{ $t('activate.register_link') }}</router-link>
				</div>
				<div class="info">{{ $t('activate.reset_pass_message') }}</div>
			</form>
		</template>
	</PageItem>
</template>

<style scoped>
.form_links {
	margin-top: 20px;
}
.info {
	float: left;
	width: 100%;
	padding: 10px;
	text-align: center;
	font-size: 16px;
	color: var(--placeholder);
}
</style>
