<demo>支持 error</demo>

<template>
  <div>
    <Input value="" error="输入错误"></Input>
  </div>
</template>

<script lang="ts">
import Input from "../lib/Input.vue";

export default {
  components: {
    Input,
  },
};
</script>