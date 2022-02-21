<template>
  <div class="topNav">
    <router-link class="logo" to="/">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-home"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc/intro">文档</router-link>
      </li>
      <li>
        <router-link to="/doc/input">组件</router-link>
      </li>
    </ul>
    <svg
      class="icon toggleAside"
      aria-hidden="true"
      @click="toggleAside"
      v-if="toggleMenuButtonVisible"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
$color: #003c9b;
.topNav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > .icon {
      width: 28px;
      height: 28px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      > a {
        color: $color;
      }
    }
  }
  > .toggleAside {
    width: 28px;
    height: 28px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>