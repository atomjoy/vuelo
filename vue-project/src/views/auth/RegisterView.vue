<script setup>
import { ref, onMounted } from 'vue'
import PageItem from '@/components/pages/PageItem.vue'
import Alert from '@/components/Alert.vue'
import CheckboxPolicy from '@/components/input/CheckboxPolicy.vue'
import Title from '@/components/PageTitle.vue'
import LoaderCircle from '@/components/Loader.vue'
import { useAuthStore } from '@/stores/auth.js'

const refresh = ref(1)
const loader = ref(false)
const policy = ref(false)
const message = ref('')
const type = ref('success')
const auth = useAuthStore()

async function onSubmit(e) {
	loader.value = true
	auth.scrollTop()
	await auth.registerUser(new FormData(e.target))
	message.value = auth.alert.message
	type.value = auth.alert.type
	auth.log('onSubmit', auth.alert)
	if (auth.alert.type == 'success') {
		e.target.reset()
	}
	refresh.value++
	loader.value = false
}

function validatePass(e) {
	auth.log('Keyup event', e.target.value)
}
</script>

<template>
	<Title title="register.title" />

	<LoaderCircle v-if="loader" />

	<PageItem>
		<template #content>
			<form method="post" class="form" @submit.prevent="onSubmit">
				<h2>{{ $t('register.form_title') }}</h2>

				<Alert v-if="message" :msg="message" :type="type" :key="refresh" />

				<label for="name">{{ $t('register.name') }} <i class="fas fa-user"></i></label>
				<input type="text" name="name" :placeholder="$t('register.name_placeholder')" v-focus />

				<label for="email">{{ $t('register.email') }} <i class="fas fa-envelope"></i></label>
				<input type="text" name="email" :placeholder="$t('register.email_placeholder')" />

				<label for="password">{{ $t('register.password') }} <i class="fas fa-key"></i></label>
				<input type="password" name="password" :placeholder="$t('register.password_placeholder')" @keyup="validatePass" />

				<label for="password_confirmation">{{ $t('register.password_confirmation') }} <i class="fas fa-key"></i></label>
				<input type="password" name="password_confirmation" :placeholder="$t('register.password_confirmation_placeholder')" />

				<CheckboxPolicy :label="$t('register.accept_policy')" value="1" v-model="policy" name="accept_policy" />

				<input type="submit" :value="$t('register.button')" class="register_button disabled" :disabled="policy == false" />

				<div class="form_links">
					<router-link to="/login">{{ $t('register.login_link') }}</router-link>
					<router-link to="/reset-password">{{ $t('register.reset_link') }}</router-link>
				</div>
			</form>
		</template>
	</PageItem>
</template>
