<template>
    <div class="snackbar" v-if="show">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    name:'snackBar',
    data() {
      return {
        show: false,
        message: ''
      };
    },
    methods: {
      showSnackbar(message) {
        this.message = message;
        this.show = true;
        
        // Automatically hide the snackbar after a certain duration
        setTimeout(() => {
          this.hideSnackbar();
        }, 3000);
      },
      hideSnackbar() {
        this.show = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .snackbar {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 16px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    z-index: 9999;
    display: flex;
    align-items: center;
  }
  </style>
  