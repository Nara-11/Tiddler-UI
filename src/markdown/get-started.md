# 开始使用

确认成功安装组件库后

然后在写入下面的代码

```
import {Input, Button, Dialog, openDialog, Switch, Tabs, Message, openMessage} from "tiddler-ui"
```

就可以使用我提供的组件

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Input, Button, Dialog, openDialog, Switch, Tabs, Message, openMessage} from "tiddler-ui"
export default {
  components: {Button}
}
</script>
```
