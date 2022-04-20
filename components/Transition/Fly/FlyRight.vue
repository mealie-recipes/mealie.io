<template>
  <transition name="fly">
    <slot></slot>
  </transition>
</template>

<script></script>

<style lang="css" scoped>
.fly-move,
.fly-enter-active,
.fly-leave-active {
  transition: all 0.75s ease;
}
.fly-enter-from,
.fly-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.fly-leave-active {
  position: absolute;
  transform: translateY(300px);
}
</style>
