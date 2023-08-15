<template>
    <div class="container">
      <div class="column" @drop="onDrop(column1Images)" @dragover.prevent>
        <div v-for="image in column1Images" :key="image.id" class="drag-item" @dragstart="onDragStart(image)" draggable="true">
          <img :src="image.src" alt="Image" />
        </div>
      </div>
  
      <div class="column" @drop="onDrop(column2Images)" @dragover.prevent>
        <div v-for="image in column2Images" :key="image.id" class="drag-item" @dragstart="onDragStart(image)" draggable="true">
          <img :src="image.src" alt="Image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'testTwo',
    data() {
      return {
        column1Images: [
          { id: 1, src: require(`../../assets/Routine/bath.jpg`) },
          { id: 2, src: require(`../../assets/Routine/bath.jpg`) },
        ],
        column2Images: [
          { id: 3, src: 'path/to/image3.jpg' },
          { id: 4, src: 'path/to/image4.jpg' },
        ],
      };
    },
    methods: {
      onDragStart(image, event) {
        // Set the image data to be transferred
        event.dataTransfer.setData('text/plain', JSON.stringify(image));
      },
      onDrop(targetColumn, event) {
        event.preventDefault();
  
        // Access the transferred image data
        const imageData = event.dataTransfer.getData('text/plain');
        const image = JSON.parse(imageData);
  
        // Identify the source column
        const sourceColumn = image.column;
        
        // Move the image to the target column
        if (targetColumn !== sourceColumn) {
          // Remove the image from the source column
          const sourceIndex = sourceColumn.indexOf(image);
          if (sourceIndex !== -1) {
            sourceColumn.splice(sourceIndex, 1);
          }
  
          // Push the image to the target column
          targetColumn.push(image);
        }
      },
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
  }
  
  .column {
    flex: 1;
    padding: 10px;
    border: 1px solid gray;
  }
  
  .drag-item {
    margin-bottom: 10px;
    cursor: move;
  }
  
  img {
    width: 100px;
    height: 100px;
  }
  </style>
  