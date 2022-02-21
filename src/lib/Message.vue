<template>
  <div
    class="component-message"
    v-if="messageVisible"
    :class="`component-theme-${theme}`"
  >
    <div class="component-message-icon">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${theme}`"></use>
      </svg>
    </div>
    <div class="component-message-content"><slot /></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "information",
    },
    messageVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
$information: #edf2fc;
$success: #f0f9eb;
$warning: #fdf6ec;
$error: #fef0f0;

#messages {
  position: fixed;
  left: 50%;
  top: 30px;
  transform: translate3d(-50%, 0, 0);
  z-index: 1000;
}
.component-message {
  width: 350px;
  border-radius: 4px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  margin-top: 10px;

  &.icon {
    padding: 1px;
  }
  > .component-message-content {
    padding-left: 15px;
  }
}
.component-theme-information {
  background: $information;
}
.component-theme-success {
  background: $success;
}
.component-theme-warning {
  background: $warning;
}
.component-theme-error {
  background: $error;
}
</style>