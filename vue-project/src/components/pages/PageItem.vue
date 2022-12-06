<script setup>
import PageMenu from '@/components/pages/PageMenu.vue'
</script>

<template>
	<PageMenu />

	<div id="app-content">
		<slot name="content"></slot>
	</div>

	<slot></slot>
</template>
