import Message from "./Message.vue";
import { createApp, h } from "vue";

let messageBox = document.querySelector("#messages");
if (!messageBox) {
  messageBox = document.createElement("div");
  messageBox.id = "messages";
  document.body.appendChild(messageBox);
}

export const openMessage = (options) => {
  const { content, theme } = options;
  const div = document.createElement("div");
  messageBox.appendChild(div);
  const app = createApp({
    render() {
      return h(Message, { theme, messageVisible: true }, content);
    },
  });
  app.mount(div);
  setTimeout(() => {
    app.unmount(div);
    div.remove();
  }, 2000);
};
