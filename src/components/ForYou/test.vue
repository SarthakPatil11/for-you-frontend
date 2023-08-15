<template>
  <div>
    <div>
      <img :src="imageSrc" width="150" height="150" @dragstart="onDragStart" draggable="true" />
    </div>
    
    <div>
      <img :src="check" width="150" height="150" @dragover.prevent @drop="onDrop" />
    </div>
  </div>
</template>

<script>
import imageSrc from '../../assets/Routine/bath.jpg'
export default {
  name: "TestOne",
  data() {
    return {
      imageSrc: imageSrc,
      check:null
    };
  },
  methods: {
    onDragStart(event) {
      event.dataTransfer.setData('text/plain', this.imageSrc);
      console.log(event.dataTransfer.setData('text/plain', this.imageSrc),">>")
    },
    onDrop(event) {
      event.preventDefault();

      // Access the dropped image URL
      console.log(event.dataTransfer.getData('text/plain'),">>event.dataTransfer.getData");
      const imageUrl = event.dataTransfer.getData('text/plain');

      // Perform further processing with the dropped image URL
      // console.log(this.imageSrc,">imageSrc")
      this.check = imageUrl
      console.log(imageUrl,">imageUrl");
    },
  },
};
</script>

<style>
.container {
  width: 20%;
  height: 20%;
  border: 2px dashed gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
}
</style>
