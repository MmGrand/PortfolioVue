<template>
  <h2 class="title-1">Проекты</h2>
  <ul class="projects">
    <li v-for="project in projectList" :key="project.id" class="project">
      <router-link :to = "{name: 'project', params: { id: project.id}}">
        <img
          :src="project.imgSrc"
          alt="project img"
          class="project__img"
        />
        <h3 class="project__title">{{ project.title }}</h3>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { projects } from '../data/project';

const projectList = ref(projects);
</script>