<template>
  <List :arr="data">
    <template v-slot="{ item }">
      {{ item }}
    </template>
  </List>
</template>
<script>
import List from "./components/List";
export default {
  data() {
    return {
      data: ["苹果", "香蕉", "橘子"],
    };
  },
  components: {
    List,
  },
};
</script>