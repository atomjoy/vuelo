<template>
	<div class="locale-changer">
		<select v-model="$i18n.locale" class="btn-change-locale">
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
::selection {
	background-color: red;
	color: white;
}
select {
	appearance: none;
	text-align: center;
	float: right;
	min-width: 50px;
	height: 50px;
	padding: 10px;
	margin: 0px 5px;
	width: auto;
	font-size: 14px;
	border: 1px solid var(--color-bg);
	transition: all 0.6s;
	cursor: pointer;
	background: transparent;
}

/* select {
	float: right;
	width: auto;
}

select option {
	margin: 40px;
	background: #fff;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
} */
</style>
