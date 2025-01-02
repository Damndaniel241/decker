<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  title: { type: String, required: false },
  posR: { type: Number, required: true },
  posC: { type: Number, required: true },
  isComplete: { type: Boolean, required: false }, // New prop to indicate if the puzzle is solved
//   isSolved: Boolean, // Pass this prop to indicate if the puzzle is solved
//   imageUrl: String,
});

// const backgroundPosition = computed(() => {
//   if (props.title === "0") return "none"; // Default: no background for blank tile
//   const size = 100; // Assume each tile is 100px by 100px
//   const x = -props.posC * size;
//   const y = -props.posR * size;
//   return `${x}px ${y}px`;
// });

// const showBackgroundForTile = computed(() => {
//   if (props.title === "0" && props.isSolved) {
//     // Show background image for blank tile when solved
//     const size = 100;
//     const x = -props.posC * size;
//     const y = -props.posR * size;
//     return `${x}px ${y}px`;
//   }
//   return "none"; // Otherwise, no background for blank tile
// });

const getBackgroundStyle = computed(() => {
 
  const gridSize = 4; // Assuming a 4x4 grid
  const tileSize = 130 / gridSize; // Percentage of each tile's size relative to the image

  if (props.title === "0") {
    if (props.isComplete) {
      // Display the last part of the image when the puzzle is complete
      return {
        backgroundImage: `url('/src/views/puzzler/assets/photo-grid-1.avif')`,
        backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
        backgroundPosition: `${(gridSize - 1) * tileSize}% ${(gridSize - 1) * tileSize}%`,
        backgroundRepeat: "no-repeat",
      };
    }
    return { background: "#ccc" }; // Default blank tile
  }

  const tileIndex = parseInt(props.title) - 1;

//   const x = -props.posC * tileSize;
    //   const y = -props.posR * tileSize;

  const x = tileIndex % gridSize; // Column index of the tile
  const y = Math.floor(tileIndex / gridSize); // Row index of the tile

  return {
    backgroundImage: `url('/src/views/puzzler/assets/photo-grid-1.avif')`, // Path to your image
    backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`, // Scale the image to fit all tiles
    // backgroundSize: `400px 400px`, // Scale the image to fit all tiles
    backgroundPosition: `${x * tileSize}% ${y * tileSize}%`, // Adjust position to fit the tile
    backgroundRepeat: "no-repeat",
  };
});


// :style="{
//       backgroundImage: props.title === '0' && props.isSolved ? `url(${props.imageUrl})` : props.title !== '0' ? `url(${props.imageUrl})` : 'none',
//       backgroundPosition: props.title === '0' && props.isSolved ? showBackgroundForTile : backgroundPosition,
//       backgroundSize: '400px 400px', // Adjust to match the puzzle's size
//     }"
</script>

<template>
  <button
  :style="getBackgroundStyle"
    class="p-2 border cursor-pointer border-black w-[6rem] h-[6rem] text-white text-lg"
  >
    <!-- {{ props.title != "0" ? props.title : " " }} -->
  </button>
</template>

<style scoped>
/* button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
} */
</style>
