<template>
  <div class="my_tag_height" :style="{ height: height + 'px' }"></div>
</template>

<script setup>
defineProps(['height'])
</script>
