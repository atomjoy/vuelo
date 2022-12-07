<script setup>
import { ref } from 'vue'
import PanelTitle from '@/components/panel/PanelTitle.vue'
import PanelPageItem from '@/components/panel/PanelPageItem.vue'
import Title from '@/components/PageTitle.vue'
import Topbar from '@/components/panel/Topbar.vue'
import Alert from '@/components/auth/Alert.vue'
import LoaderCircle from '@/components/auth/Loader.vue'
import { useAuthStore } from '@/stores/auth.js'

const refresh = ref(1)
const loader = ref(false)
const message = ref('')
const type = ref('success')
const auth = useAuthStore()

function refreshAlert() {
	refresh.value++
}

async function onSubmit(e) {
	loader.value = true
	await auth.changePassUser(new FormData(e.target))
	auth.scrollTop()
	message.value = auth.alert.message
	type.value = auth.alert.type
	if (auth.alert.type == 'success') {
		e.target.reset()
	}
	auth.log('onSubmit', auth.alert)
	refreshAlert()
	loader.value = false
}

function validatePass(e) {
	auth.log('Keyup event', e.target.value)
}
</script>

<template>
	<Title title="change_pass.title" />

	<LoaderCircle v-if="loader" />

	<PanelPageItem>
		<template #topbar>
			<Topbar />
		</template>

		<template #content>
			<PanelTitle msg="change_pass.page_title" text="change_pass.page_message" />

			<div class="full">
				<form method="post" class="form margin-top" @submit.prevent="onSubmit">
					<!-- <h2>{{ $t('change_pass.form_title') }}</h2> -->

					<Alert v-if="message" :msg="message" :type="type" :key="refresh" />

					<label for="password_current">{{ $t('change_pass.password_current') }} <i class="fas fa-key"></i></label>
					<input type="password" name="password_current" :placeholder="$t('change_pass.password_current_placeholder')" v-focus />

					<label for="password">{{ $t('change_pass.password') }} <i class="fas fa-key"></i></label>
					<input type="password" name="password" :placeholder="$t('change_pass.password_placeholder')" @keyup="validatePass" />

					<label for="password_confirmation">{{ $t('change_pass.password_confirmation') }} <i class="fas fa-key"></i></label>
					<input type="password" name="password_confirmation" :placeholder="$t('change_pass.password_confirmation_placeholder')" />

					<input type="submit" :value="$t('change_pass.button')" />
				</form>
			</div>
		</template>
	</PanelPageItem>
</template>

<style scoped>
p {
	float: left;
	width: 100%;
	overflow: hidden;
}
.full {
	float: left;
	width: 100%;
	padding-top: 10px;
}
</style>
