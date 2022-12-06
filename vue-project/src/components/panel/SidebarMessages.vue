<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const router = useRouter()

function open() {
	auth.availableMessages = false
	router.push('/panel/messages')
}

onMounted(async () => {
	// Check for new messages here
	const res = await axios.get('https://yesno.wtf/api')
	console.log(res.data)
	// Demo sample
	auth.availableMessages = res.data.answer == 'yes'
})
</script>

<template>
	<div @click="open" :class="{ 'sidebar-notify': true, 'notify-dot': auth.availableMessages }">
		<i class="fas fa-envelope"></i>
		<div class="dot"></div>
	</div>
</template>

<style scoped>
.sidebar-notify {
	position: relative;
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
.sidebar-notify:hover {
	background: var(--color-bg);
}
.sidebar-notify i {
	padding: 10px;
	transition: all 0.6s;
}
.sidebar-notify:hover i {
	transform: rotate(45deg);
}
.sidebar-notify .dot {
	opacity: 0;
}
.notify-dot .dot {
	opacity: 1;
	position: absolute;
	top: 5px;
	right: 5px;
	padding: 7px;
	background: var(--color);
	border-radius: var(--radius);
	box-shadow: 0px 0px 6px var(--color);
	z-index: 3;
}
</style>
