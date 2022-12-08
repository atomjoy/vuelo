<script setup>
defineProps({
	msg: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<h1 class="title-tag">{{ $t(msg) }}</h1>
</template>

<style scoped>
h1 {
	font-weight: 400;
	font-size: 2.1rem;
}
</style>
