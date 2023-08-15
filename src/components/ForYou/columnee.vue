<template>
    <div class="column" @dragover.prevent @drop="$emit('drop')">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name:"ColumnOne",
    props: {
      blocks: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  