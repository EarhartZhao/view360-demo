<template>
  <div class="view360-container">
    <canvas class="view360-canvas" id="view360-canvas" ref="canvasRef" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import img1 from './assets/1.jpg';
import View360, {
  View360Error,
  ERROR_CODES,
  EVENTS,
  LoadingSpinner,
  EquirectProjection
} from "@egjs/view360";

import { options } from "./utils";

let viewer: any;

const canvasRef = ref();

const init = () => {
  viewer.init();
};

onMounted(() => {
  try {
    viewer = new View360(".view360-container", {
      canvasSelector: "#view360-canvas",
      ...options,
      projection: new EquirectProjection({
        src: img1,
      }),
      plugins: [new LoadingSpinner()],
      on: {
        [EVENTS.READY]: (evt: any) => {
          console.log("View360 is Ready!", evt);
        },
      },
    });

    init();
  } catch (err) {
    console.log("first page err", err);
    if (
      err instanceof View360Error &&
      err.code === ERROR_CODES.ELEMENT_NOT_FOUND
    ) {
      // No element corresponding to "#wrapper" was found.
    }
  }
});
</script>
<style scoped>
.view360-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.view360-canvas {
  width: 100%;
  height: 100%;
}
</style>
