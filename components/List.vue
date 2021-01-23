<!-- List组件渲染列表 -->
<template>
  <div class="list">
    <div v-for="(item, index) in data" :key="index">
      <li>{{ item }}</li>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
    default: () => [],
  },
};
</script>