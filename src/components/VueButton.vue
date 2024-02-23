<template>
  <button @click="onClick" class="bg-blue-700 rounded m-4 text-white">
    <slot />
  </button>
</template>

<script lang="ts" setup>
function onClick(event: MouseEvent) {
  alert("hello from Vue");
}
</script>
