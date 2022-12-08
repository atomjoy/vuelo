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

		<template #footer>
			<PageFooter />
		</template>
	</PageItem>
</template>

<style></style>
