<demo>常规使用</demo>

<template>
  <div>
    <Button @click="showMessage1">提示</Button>
    <Button @click="showMessage2">成功</Button>
    <Button @click="showMessage3">警告</Button>
    <Button @click="showMessage4">错误</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { openMessage } from "../lib/openMessage";

export default {
  components: {
    Button,
  },
  setup() {
    const showMessage1 = () => {
      openMessage({ content: "这是一条信息提示", theme: "information" });
    };
    const showMessage2 = () => {
      openMessage({ content: "这是一条成功提示", theme: "success" });
    };
    const showMessage3 = () => {
      openMessage({ content: "这是一条警告提示", theme: "warning" });
    };
    const showMessage4 = () => {
      openMessage({ content: "这是一条错误提示", theme: "error" });
    };
    return { showMessage1, showMessage2, showMessage3, showMessage4 };
  },
};
</script>