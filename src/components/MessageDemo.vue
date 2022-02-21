<template>
  <h1>Message 消息提示</h1>
  <Demo :component="Message1Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Message1Demo from "./Message1.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Message1Demo,
    };
  },
};
</script>