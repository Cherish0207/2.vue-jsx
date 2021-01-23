<template>
  <div>
    <div v-for="(item, key) in arr" :key="key">
      <slot :item="item"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    arr: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>