<script setup>
import { ref } from 'vue'
import PageItem from '@/components/pages/PageItem.vue'
import Alert from '@/components/auth/Alert.vue'
import Title from '@/components/PageTitle.vue'
import { useAuthStore } from '@/stores/auth.js'

const refresh = ref(1)
const message = ref('')
const type = ref('success')
const auth = useAuthStore()

function refreshAlert() {
	refresh.value++
}

async function onSubmit(e) {
	await auth.changePassUser(new FormData(e.target))
	auth.scrollTop()

	message.value = auth.alert.message
	type.value = auth.alert.type

	if (auth.alert.type == 'success') {
		e.target.reset()
	}

	auth.log('onSubmit', auth.alert)

	refreshAlert()
}

function validatePass(e) {
	auth.log('Keyup event', e.target.value)
}
</script>

<template>
	<Title title="change_pass.title" />

	<PageItem>
		<template #content>
			<form method="post" class="form" @submit.prevent="onSubmit">
				<h2>{{ $t('change_pass.form_title') }}</h2>

				<Alert v-if="message" :msg="message" :type="type" :key="refresh" />

				<label for="password_current">{{ $t('change_pass.password_current') }} <i class="fas fa-key"></i></label>
				<input type="password" name="password_current" :placeholder="$t('change_pass.password_current_placeholder')" v-focus />

				<label for="password">{{ $t('change_pass.password') }} <i class="fas fa-key"></i></label>
				<input type="password" name="password" :placeholder="$t('change_pass.password_placeholder')" @keyup="validatePass" />

				<label for="password_confirmation">{{ $t('change_pass.password_confirmation') }} <i class="fas fa-key"></i></label>
				<input type="password" name="password_confirmation" :placeholder="$t('change_pass.password_confirmation_placeholder')" />

				<input type="submit" :value="$t('change_pass.button')" />
			</form>
		</template>
	</PageItem>
</template>
