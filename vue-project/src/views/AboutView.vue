<script setup>
import { ref } from 'vue'
import TitleTag from '@/components/TitleTag.vue'
import PageItem from '@/components/pages/PageItem.vue'
import Title from '@/components/PageTitle.vue'
import PageFooter from '@/components/pages/PageFooter.vue'

import MapMarker from '@/components/map/google/MapMarker.vue'
import MapMarkerOnClick from '@/components/map/google/MapMarkerOnClick.vue'
import MapPolygon from '@/components/map/google/MapPolygon.vue'
import MapPolygonDraw from '@/components/map/google/MapPolygonDraw.vue'

const polygon = [
	{ lat: 50.87919131500943, lng: 19.793808180377113 },
	{ lat: 49.09947863186494, lng: 22.210800367877113 },
	{ lat: 49.17135924121919, lng: 17.223007399127113 },
	{ lat: 50.87919131500943, lng: 19.793808180377113 },
]

let marker = ref(null)
let createdPolygon = ref(null)

function getMarker(e) {
	marker.value = e
}

function getPolygon(e) {
	createdPolygon.value = e
}
</script>

<template>
	<Title title="text.about.title" />

	<PageItem>
		<template #content>
			<TitleTag msg="text.about.title" />
			<p>{{ $t('text.about.text') }}</p>

			<!-- <MapMarker :lat="49.299" :lng="19.949" :zoom="5" /> -->
			<MapPolygon :lat="49.299" :lng="19.949" :zoom="5" :polygon="polygon" :color="`#f60`" />

			<!-- <MapMarkerOnClick @markerCreated="getMarker" :lat="49.299" :lng="19.949" :zoom="5" /> -->
			<!-- <p>Marker {{ marker }}</p> -->

			<!-- <MapPolygonDraw @polygonCreated="getPolygon" :lat="49.299" :lng="19.949" :zoom="5" /> -->
			<!-- <p>Polygon {{ createdPolygon }}</p> -->
		</template>
	</PageItem>

	<PageFooter />
</template>

<style>
p {
	margin-bottom: 20px;
}

.iwx {
	position: relative;
	width: 360px !important;
}
.iwx-logo {
	position: absolute;
	top: -50px;
	left: 30px;
	width: 100px !important;
	height: 100px !important;
	border-radius: 50%;
	padding: 10px !important;
	background: #fff;
	z-index: 999;
	overflow: hidden;
}
.iwx-logo img {
	float: left;
	width: 100% !important;
	border-radius: 50%;
}
.iwx h2 {
	display: block;
	font-size: 26px;
	font-weight: 300;
	text-align: center;
	margin-top: 60px;
	margin-bottom: 10px;
}
.iwx a {
	float: left;
	width: 90%;
	margin: 20px 5%;
	padding: 13px 20px;
	color: #fff;
	background: #fdb500;
	border-radius: 10px;
	font-weight: 900;
	font-size: 17px;
	transition: all 0.6s;
}
.iwx a:hover {
	color: #fdb500;
	background: #000;
	border-radius: 50px;
}
</style>
