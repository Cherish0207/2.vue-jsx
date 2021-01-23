<template>
  <div class="list">
    <div v-for="(item, index) in data" :key="index">
      <li v-if="!render">{{ item }}</li>
      <!-- 将render方法传到函数组件中，将渲染项传入到组件中，在内部回调这个render方法 -->
      <ListItem v-else :item="item" :render="render"></ListItem>
    </div>
  </div>
</template>
<script>
import ListItem from "./ListItem";
export default {
  components: {
    ListItem,
  },
  props: {
    render: {
      type: Function,
    },
    data: Array,
    default: () => [],
  },
};
</script>