<script setup>
import { RouterLink } from 'vue-router'
import SidebarLogo from '@/components/panel/SidebarLogo.vue'
import SidebarClose from '@/components/panel/SidebarClose.vue'
import { useAuthStore } from '@/stores/auth.js'
const auth = useAuthStore()
</script>

<template>
	<div class="sidebar animate__animated animate__slideInLeft">
		<div class="top">
			<SidebarLogo />
			<SidebarClose />
		</div>

		<div class="mid">
			<RouterLink to="/panel" class="link"> <i class="fas fa-columns"></i> {{ $t('menu.dashboard') }}</RouterLink>
			<RouterLink to="/panel/settings" class="link"> <i class="fas fa-cogs"></i> {{ $t('menu.settings') }}</RouterLink>
			<RouterLink to="/panel/messages" class="link"> <i class="fas fa-envelope"></i> {{ $t('menu.messages') }}</RouterLink>
			<RouterLink to="/panel/change-password" class="link"> <i class="fas fa-key"></i> {{ $t('menu.change-password') }}</RouterLink>
		</div>

		<div class="bot">
			<RouterLink to="/logout" :title="$t('menu.logout')" class="link"> <i class="fas fa-sign-out"></i> {{ $t('menu.logout') }} </RouterLink>
		</div>
	</div>
</template>

<style scoped>
.close-sidebar {
	float: right;
	padding: 0px 10px;
	color: var(--color);
	cursor: pointer;
	transition: all 0.6s;
}
.close-sidebar:hover {
	color: var(--color-text);
	transform: rotate(180deg);
}
.sidebar {
	z-index: 999999;
	position: fixed;
	display: flex;
	flex-direction: column;
	padding: 20px 10px 20px 20px;
	top: 0px;
	left: 0px;
	width: 260px;
	height: 100%;
	box-shadow: 0px 15px 50px #00339955;
	border-radius: 0px 10px 10px 0px;
	transition: all 0.6s;
	background: var(--bg);
}
.sidebar .link {
	float: left;
	width: 100%;
	margin: 5px 0px;
	padding: 10px;
	font-size: 16px;
	border-radius: var(--radius);
	color: var(--color-text);
}
.sidebar .link i {
	margin: 0px 10px;
}
.sidebar .link:hover {
	color: var(--color);
}
.sidebar .router-link-exact-active {
	border-right: 2px solid var(--color);
	color: var(--color);
	background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(111, 106, 248, 0.3) 100%);
	font-weight: 700;
}
.sidebar .router-link-exact-active:hover {
	color: var(--color);
	background-color: transparent;
}
.sidebar .top {
	display: block;
	padding-bottom: 20px;
}
.sidebar .mid {
	height: 100%;
	padding-right: 10px;
	overflow-x: hidden;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: var(--color-bg) transparent;
}
.sidebar .mid:hover {
	scrollbar-color: var(--color) transparent;
}
.sidebar .bot {
	display: block;
}

@media (prefers-color-scheme: dark) {
	.sidebar {
		box-shadow: 0px 15px 50px #d8a86255;
	}
	.sidebar .router-link-exact-active {
		background: linear-gradient(270deg, rgba(216, 168, 98, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
	}
}
</style>
