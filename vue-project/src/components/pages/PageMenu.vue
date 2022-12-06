<script setup>
import { RouterLink } from 'vue-router'
import PageLogo from '@/components/pages/PageLogo.vue'
import ChangeLocale from '@/components/ChangeLocale.vue'
import { useAuthStore } from '@/stores/auth.js'
const auth = useAuthStore()
</script>

<template>
	<nav class="page-menu">
		<PageLogo />

		<RouterLink to="/">{{ $t('menu.home') }}</RouterLink>
		<RouterLink to="/about">{{ $t('menu.about') }}</RouterLink>
		<RouterLink to="/login" v-if="auth.user == null">{{ $t('menu.login') }}</RouterLink>

		<RouterLink to="/panel" v-if="auth.user != null">{{ $t('menu.dashboard') }}</RouterLink>
		<RouterLink to="/panel/change-password" v-if="auth.user != null">{{ $t('menu.change-password') }}</RouterLink>
		<RouterLink to="/logout" v-if="auth.user != null">{{ $t('menu.logout') }}</RouterLink>

		<ChangeLocale />
	</nav>
</template>

<style scoped>
nav {
	display: flex;
	flex-wrap: wrap;
	font-size: 1.1rem;
	padding: 10px 0px;
	margin: 1rem 2rem;
	border-bottom: 1px solid var(--color);
	align-items: center;
	justify-content: baseline;
}

nav a.router-link-exact-active {
	color: var(--color);
	font-weight: 900;
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 10px 15px;
	border-left: 1px solid var(--color);
}

nav a:first-of-type {
	border: 0;
}

@media (hover: hover) {
	nav a:hover {
		background: var(--link-hover-bg);
	}
}

@media (max-width: 480px) {
	nav {
		display: block;
	}
	nav a {
		width: 100%;
		font-size: 14px;
		padding: 0px 10px;
	}
}
</style>
