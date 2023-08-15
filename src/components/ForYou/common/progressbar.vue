<template>
    <div class="progress-bar">
      <div class="progress-bar__fill" :style="{ width: progress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "aaaaaaa-",
    data() {
      return {
        progress: 0
      };
    },
    methods: {
      setProgress(value) {
        this.progress = value;
      }
    }
  };
  </script>
  
  <style scoped>
  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #eee;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress-bar__fill {
    height: 100%;
    background-color: #29d;
    transition: width 0.3s ease-in-out;
  }
  </style>
  