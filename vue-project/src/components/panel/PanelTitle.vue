<script setup>
defineProps({
	msg: {
		type: String,
		required: true,
	},
	text: {
		type: String,
	},
})
</script>

<template>
	<h1 class="panel-title-tag">{{ $t(msg) }}</h1>
	<p>{{ $t(text) }}</p>
</template>

<style scoped>
h1 {
	float: left;
	width: 100%;
	overflow: hidden;
	font-size: 1.7rem;
	padding: 0px;
	padding-top: 20px;
	font-weight: 700;
	color: var(--color-text);
}

p {
	float: left;
	width: 100%;
	overflow: hidden;
	font-size: 1rem;
	font-weight: 400;
	padding: 0px;
	padding-bottom: 10px;
}
</style>
