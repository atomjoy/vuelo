<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<RouterLink to="/" class="logo-link"><img alt="Logo" class="logo" src="@/assets/logo.png" width="36" /></RouterLink>
</template>

<style>
.logo {
	float: left;
	background: transparent;
}
.logo-link:hover {
	background: transparent;
}
</style>
