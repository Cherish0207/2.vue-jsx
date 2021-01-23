<template>
  <List :data="data" :render="render"></List>
</template>
<script>
import List from "./components/List";
export default {
  data() {
    return {
      data: ["苹果", "香蕉", "橘子"],
      render(_, name) {
        return <span>{'render_' + name}</span>;
      },
    };
  },
  components: {
    List,
  },
};
</script>