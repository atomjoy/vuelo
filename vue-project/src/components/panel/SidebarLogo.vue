<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<RouterLink to="/" class="logo">
		<img alt="Logo" class="image" src="@/assets/logo.png" />
	</RouterLink>
</template>

<style scoped>
.image {
	max-height: 50px;
	object-fit: cover;
	object-position: center center;
}
</style>
