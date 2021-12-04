<template>
  <transition name="mar">
  <div v-show="title == selectedTitle">
    <slot></slot> 
  </div>
  </transition>
</template>

<script>
import { inject } from 'vue'
export default {
  props: ['title'],
  setup() {
    const selectedTitle = inject("selectedTitle")

    return {
      selectedTitle,
    }
  }

}
</script>

<style>
  .mar-enter-from
  
  {
    opacity: 0;
    transform: translateX(-100px);
  }
  .mar-leave-to{
    opacity: 0;
    transform: translateX(-100px);
  }

  .mar-enter-active,
  .mar-leave-active{
    transition: all 1s ease;
  }
</style>
