<script setup lang="ts">
import { ref,computed } from "vue";
import Box from "../components/Box.vue";
// const grid = ref([[0], [1, 2, 3], [4, 5, 6], [7, 8, 9]]);
const grid = ref([ [0, 1, 2, 3],[4, 5, 6, 7], [8,9,10,11],[12,13,14,15]]);

const correctGrid = ref([[1, 2, 3, 4],[ 5, 6, 7, 8],[9,10,11,12],[13,14,15,0]]);


// const imageUrl = "https://unsplash.com/photos/brown-bear-near-grass-field-kZ8dyUT0h30"
const imageUrl = "/src/views/puzzler/assets/photo-grid-1.avif"




function countInversions(flatGrid) {
  let inversions = 0;
  for (let i = 0; i < flatGrid.length; i++) {
    for (let j = i + 1; j < flatGrid.length; j++) {
      if (flatGrid[i] > flatGrid[j] && flatGrid[j] !== 0) {
        inversions++;
      }
    }
  }
  return inversions;
}

function getBlankRowFromBottom(grid) {
  const blankRow = grid.findIndex(row => row.includes(0));
  return grid.length - blankRow; // Rows from the bottom
}

function isSolvable(grid, correctGrid) {
  const flatGrid = grid.flat();
  const flatCorrectGrid = correctGrid.flat();

  const gridInversions = countInversions(flatGrid);
  const correctInversions = countInversions(flatCorrectGrid);

  const gridBlankRow = getBlankRowFromBottom(grid);
  const correctBlankRow = getBlankRowFromBottom(correctGrid);

  return (gridInversions + gridBlankRow) % 2 === (correctInversions + correctBlankRow) % 2;
}

function shuffleGrid(grid:any, correctGrid:any) {
  const flatGrid = grid.value.flat();

  // Shuffle using Fisher-Yates
  for (let i = flatGrid.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flatGrid[i], flatGrid[j]] = [flatGrid[j], flatGrid[i]];
  }

  // Reshape to 2D
  let index = 0;
  let reshapedGrid = Array.from({ length: grid.value.length }, () =>
    flatGrid.slice(index, (index += grid.value[0].length))
  );

  // Ensure solvability
  if (!isSolvable(reshapedGrid, correctGrid.value)) {
    // Swap two non-blank tiles to fix parity
    const nonZeroTiles = flatGrid.filter(tile => tile !== 0);
    [flatGrid[flatGrid.indexOf(nonZeroTiles[0])], flatGrid[flatGrid.indexOf(nonZeroTiles[1])]] = [
      flatGrid[flatGrid.indexOf(nonZeroTiles[1])],
      flatGrid[flatGrid.indexOf(nonZeroTiles[0])],
    ];

    index = 0;
    reshapedGrid = Array.from({ length: grid.value.length }, () =>
      flatGrid.slice(index, (index += grid.value[0].length))
    );
  }

  grid.value = reshapedGrid;
}


console.log("Before shuffle:", grid.value);
shuffleGrid(grid,correctGrid);
console.log("After shuffle:", grid.value);

function deepEqual(arr1:any, arr2:any) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!deepEqual(arr1[i], arr2[i])) return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function isZeroPos(x:number,y:number){
  
  if (grid.value[x][y]== 0){
    return true;
  }

  return false;
}




function getCurrentState(){
  console.log(deepEqual(grid.value,correctGrid.value));
  
  
  return deepEqual(grid.value,correctGrid.value);
}


function swapWithZero(x:number,y:number,title:number){
  // alert(`Row: ${x}, Column: ${y}`)




  for (let i = 0; i < grid.value.length; i++){
    for(let j = 0; j < grid.value[i].length; j++){
      if (isZeroPos(i,j)){
        let zeroX = getZeroPos()[0];
        let zeroY = getZeroPos()[1];
        if(x<zeroX){
          if(x+1===zeroX && y+0===zeroY || x+0===zeroX && y+1===zeroY || x-1===Math.abs(zeroX) && y-0===Math.abs(zeroY) || x-0===Math.abs(zeroX) && y-1===Math.abs(zeroY)){
            grid.value[i][j] = title;
            grid.value[x][y] = 0;
            getCurrentState();
          }else{
            return;
          }
        }else{
          if(x-1===Math.abs(zeroX) && y-0===Math.abs(zeroY) || x-0===Math.abs(zeroX) && y-1===Math.abs(zeroY) || x+1===zeroX && y+0===zeroY || x+0===zeroX && y+1===zeroY){
            grid.value[i][j] = title;
            grid.value[x][y] = 0;
            getCurrentState();
        }else{
            return;
          }
      }

        
      }
    }
  }


}



function getZeroPos(){


  for (let i = 0; i < grid.value.length; i++){
    for(let j = 0; j < grid.value[i].length; j++){
      if (grid.value[i][j]== 0){
    // alert(`zero position is at ${i},${j}`);
    return [i,j];
  }
    }
  }
  

  
}




</script>

<template>
  <div class="flex  justify-center items-center h-full select-none gap-[7em]">
    <div>
    <div v-for="(row,rowIndex) in grid" :key="rowIndex" class=" flex border border-black">
      <div class="flex">
        <div v-for="(elem,colIndex) in row" :key="colIndex" class="">
            <div class="flex">
          <!-- <div>{{ rowIndex }},</div> -->
          <!-- <div>{{colIndex }}</div> -->
        </div>
          <!-- <Box @click="getZeroPos(rowIndex,colIndex)" :title="String(elem)" :posR="rowIndex" :posC="colIndex" /> -->
          <Box @click="swapWithZero(rowIndex,colIndex,elem)" :title="String(elem)" :posR="rowIndex" :posC="colIndex"  :isComplete="getCurrentState()"
           />
          
        </div>
      </div>
    </div>
</div>

<div >
  <img src="/src/views/puzzler/assets/photo-grid-1.avif" alt="" class="h-[400px] w-[400px] " >
</div>
<p v-if="getCurrentState()">Congratulations! Puzzle Solved!</p>
  </div>
</template>
