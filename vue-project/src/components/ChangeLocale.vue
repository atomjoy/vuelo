<template>
	<div class="locale-changer">
		<select v-model="$i18n.locale" class="locale-changer-select">
			<option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
		</select>
	</div>
</template>

<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '@/stores/auth.js'

export default {
	name: 'ChangeLocale',
	data() {
		return {}
	},
	methods: {
		...mapActions(useAuthStore, ['changeLocale', 'updateAxiosError']),
	},
	watch: {
		// Change server locale
		'$i18n.locale': function (newVal, oldVal) {
			console.log('From ', oldVal, 'to', newVal, 'curr', this.$i18n.locale)
			this.updateAxiosError(this.$t('message.axios_err_connection'))
			this.changeLocale(newVal)
		},
	},
}
</script>

<style scoped>
.locale-changer {
	float: right;
	width: auto;
	height: auto;
	padding: 15px;
}
.locale-changer-select {
	float: right;
	width: 50px;
	padding: 0px;
	margin: 0px;
	text-align: center;
	border: 0px;
	background: transparent;
}
.locale-changer-select:focus {
	border: none;
	box-shadow: none;
}
@media (max-width: 480px) {
	.locale-changer {
		min-width: 100%;
	}
}
</style>
