<script setup>
import { ref } from 'vue'
import TitleTag from '@/components/TitleTag.vue'
import PageItem from '@/components/pages/PageItem.vue'
import Title from '@/components/PageTitle.vue'
import PageFooter from '@/components/pages/PageFooter.vue'
</script>

<template>
	<Title title="text.home.title" />

	<PageItem>
		<template #content>
			<TitleTag msg="text.home.title" />
			<p>{{ $t('text.home.text') }}</p>
		</template>

		<template #footer>
			<PageFooter />
		</template>
	</PageItem>
</template>

<style></style>
