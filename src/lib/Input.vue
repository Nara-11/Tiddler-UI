<template>
  <div class="component-wrapper" :class="{ error }">
    <input type="text" :value="value" :disabled="disabled" />
    <span v-if="error" class="component-errorMessage">{{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 16px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.component-wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: 42px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    margin: 15px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .component-errorMessage {
    color: $red;
  }
}
</style>