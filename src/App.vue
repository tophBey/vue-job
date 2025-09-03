<script setup>
import Sidebar from './components/Sidebar.vue';
import Hero from './components/Hero.vue';
import HomeCard from './components/HomeCard.vue';
import JobListings from './components/JobListings.vue';


</script>

<template>
  <Sidebar />
  <Hero title="Menjadi Developer Vue" subtitle="Temukan Pekerjaan yang cocok dengan skillmu" />
  <HomeCard />
  <JobListings limit="3" showButton="true"/>



</template>

