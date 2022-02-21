<demo>支持 level</demo>

<template>
  <div>
    <div>
      <Button level="main">重要通用按钮</Button>
      <Button>普通通用按钮</Button>
      <Button level="danger">危险通用按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">重要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">重要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>