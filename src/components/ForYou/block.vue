<template>
    <div class="block" :id="block.id" draggable="true" @dragstart="$emit('dragstart')">
      <img :src="block.src">
    </div>
  </template>
  
  <script>
  export default {
    name:"blockOne",
    props: {
      block: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  