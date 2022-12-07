<script setup>
import PageMenu from '@/components/pages/PageMenu.vue'
</script>

<template>
	<PageMenu />

	<div id="page-content">
		<slot name="content"></slot>
	</div>

	<div id="page-footer">
		<slot name="footer"></slot>
	</div>
</template>
