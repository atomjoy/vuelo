<script setup>
import { ref } from 'vue'
import PageItem from '@/components/pages/PageItem.vue'
import Alert from '@/components/Alert.vue'
import Title from '@/components/PageTitle.vue'
import LoaderCircle from '@/components/Loader.vue'
import { useAuthStore } from '@/stores/auth.js'

const refresh = ref(1)
const loader = ref(false)
const message = ref('')
const type = ref('success')
const auth = useAuthStore()

async function onSubmit(e) {
	loader.value = true
	await auth.resetUser(new FormData(e.target))
	auth.scrollTop()
	message.value = auth.alert.message
	type.value = auth.alert.type
	if (auth.alert.type == 'success') {
		e.target.reset()
	}
	auth.log('onSubmit', auth.alert)
	refresh.value++
	loader.value = false
}
</script>

<template>
	<Title title="reset.title" />

	<LoaderCircle v-if="loader" />

	<PageItem>
		<template #content>
			<form method="post" class="form" @submit.prevent="onSubmit">
				<h2>{{ $t('reset.form_title') }}</h2>

				<Alert v-if="message" :msg="message" :type="type" :key="refresh" />

				<label for="email">{{ $t('reset.email') }} <i class="fas fa-envelope"></i></label>
				<input type="text" name="email" :placeholder="$t('reset.email_placeholder')" v-focus />

				<input type="submit" :value="$t('reset.button')" />

				<div class="form_links">
					<router-link to="/login">{{ $t('reset.login_link') }}</router-link>
					<router-link to="/register">{{ $t('reset.register_link') }}</router-link>
				</div>
			</form>
		</template>
	</PageItem>
</template>
