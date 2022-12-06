<script setup>
import TitleTag from '@/components/TitleTag.vue'
import PageItem from '@/components/pages/PageItem.vue'
import Title from '@/components/PageTitleComp.vue'
</script>

<template>
	<Title title="error404.title" />

	<PageItem>
		<template #content>
			<h1 class="err-title err-title-big">4<span>0</span>4</h1>
			<h2 class="err-title">{{ $t('error404.title') }}</h2>
			<p class="err-msg">{{ $t('error404.message') }}</p>
		</template>
	</PageItem>
</template>

<style scoped>
.err-title {
	text-align: center;
	font-size: 4rem;
	color: var(--color);
	font-weight: 700;
}
.err-title-big {
	margin-top: 50px;
	font-size: 6rem;
	font-weight: 900;
	animation: 3s rotate infinite;
}
.err-msg {
	text-align: center;
	font-weight: 300;
	font-size: 1.5rem;
}
span {
	padding: 0px 10px;
	font-weight: 900;
	background: var(--color);
	color: #fff;
}

@keyframes rotate {
	from {
		-webkit-filter: hue-rotate(0deg);
		transform: rotate(0deg);
	}
	to {
		-webkit-filter: hue-rotate(-360deg);
		transform: rotate(360deg);
	}
}
</style>
