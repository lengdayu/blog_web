<template>
  <div class="header"></div>
</template>
<script setup lang="ts"></script>
<style>
.header {
  width: 100%;
  height: 15rem;
  background-image: url('@/assets/banner1.jpg');
  background-position: center center;
  background-size: 100%;
  background-color: hsl(318, 90%, 15%);
  background-repeat: no-repeat;
  animation-name: topbanner;
  animation-duration: 5s;
}

@keyframes topbanner {
  0% {
    background-size: 100%;
  }
  50% {
    background-size: 110%;
  }
  100% {
    background-size: 100%;
  }
}
</style>
