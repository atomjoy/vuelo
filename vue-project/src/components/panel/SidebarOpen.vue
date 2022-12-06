<script setup>
import { useAuthStore } from '@/stores/auth.js'
const auth = useAuthStore()
</script>

<template>
	<div class="sidebar-open" @click="auth.showSidebar">
		<i class="fas fa-bars"></i>
	</div>
</template>

<style scoped>
.sidebar-open {
	float: right;
	width: 50px;
	height: 50px;
	margin: 0px 5px;
	line-height: 50px;
	text-align: center;
	border-radius: var(--radius);
	border: 1px solid var(--color-bg);
	transition: all 0.6s;
	cursor: pointer;
}
.sidebar-open:hover {
	background: var(--color-bg);
}

.sidebar-open i {
	padding: 10px;
	transition: all 0.6s;
}

.sidebar-open:hover i {
	transform: rotate(180deg);
}
</style>
