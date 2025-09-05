
<script setup>

import {defineProps, ref, computed} from 'vue';


const isShowFullDescription = ref(false);


let state =  defineProps({
  job : {
    type : Object
    }
})
let fullDescription = computed(() => {
      let description = state.job.description;
      console.log(description);
      
      if(!isShowFullDescription.value){
        description = state.job.description.substring(0, 100) + '...';
      }
      return description;
})



const toggleDescription = () => {
  isShowFullDescription.value = !isShowFullDescription.value;
}
</script>



<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
        {{ fullDescription }} 
        <button @click="toggleDescription" class="font-medium text-md text-green-400">{{ isShowFullDescription ? 'less' : 'more' }}</button>
        </div>
      </div>

      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ job.location }}
        </div>
        <a
          href="job.html"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>