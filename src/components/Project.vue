<template>
	<div v-if="project" class="project-details">
		<h1 class="title-1">{{ project.title }}</h1>
		<img :src="project.imgSrcBig" :alt="project.title" class="project-details__cover">
		<div class="project-details__desc">
			{{ project.desc }}
		</div>
		<a :href="project.link" target="_blank" class="btn-outline">
			<img src="../assets/img/icons/gitHub-black.svg" alt="gitHub-black icon">
			GitHub repo
		</a>
	</div>
	<div v-else class="project-details">
		<h1 class="title-1">Проект не найден.</h1>
	</div>
</template>

 <script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../data/project';


const route = useRoute();
const project = ref(null);

const projectId = parseInt(route.params.id);
project.value = projects.find(p => p.id === projectId);
 </script>