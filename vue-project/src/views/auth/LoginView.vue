<script setup>
import { ref, reactive, toRefs, computed, onMounted } from 'vue'
import PageItem from '@/components/pages/PageItem.vue'
import Alert from '@/components/auth/Alert.vue'
import Checkbox from '@/components/input/Checkbox.vue'
import Title from '@/components/PageTitle.vue'
import LoaderCircle from '@/components/auth/Loader.vue'
import { useAuthStore } from '@/stores/auth.js'

const refresh = ref(1)
const loader = ref(false)
const message = ref('')
const type = ref('success')
const remember_me = ref(false)
const auth = useAuthStore()

async function onSubmit(e) {
	loader.value = true
	await auth.loginUser(new FormData(e.target))
	auth.scrollTop()
	message.value = auth.alert.message
	type.value = auth.alert.type
	auth.log('onSubmit', auth.alert)
	refresh.value++
	loader.value = false
}

function validatePass(e) {
	auth.log('Keyup event', e.target.value)
}
</script>

<template>
	<Title title="login.title" />

	<LoaderCircle v-if="loader" />

	<PageItem>
		<template #content>
			<form method="post" class="form" @submit.prevent="onSubmit">
				<h2>{{ $t('login.form_title') }}</h2>

				<Alert v-if="message" :msg="message" :type="type" :key="refresh" />

				<label for="email">{{ $t('login.email') }} <i class="fas fa-envelope"></i></label>
				<input type="text" name="email" :placeholder="$t('login.email_placeholder')" v-focus />

				<label for="password">{{ $t('login.password') }} <i class="fas fa-key"></i></label>
				<input type="password" name="password" :placeholder="$t('login.password_placeholder')" @keyup="validatePass" />

				<Checkbox :label="$t('login.remember_me')" value="1" v-model="remember_me" name="remember_me" />

				<input type="submit" :value="$t('login.button')" />

				<div class="form_links">
					<router-link to="/register">{{ $t('login.register_link') }}</router-link>
					<router-link to="/reset-password">{{ $t('login.reset_link') }}</router-link>
				</div>
			</form>
		</template>
	</PageItem>
</template>
