<script setup>
import PageMenu from '@/components/pages/PageMenu.vue'
</script>

<template>
	<PageMenu />

	<div id="page-content">
		<slot name="content"></slot>
	</div>

	<slot></slot>
</template>
