<script setup lang="ts">
import { Engine } from "~/types";
import { engines } from "../composables/data";

const searchText = $ref("");
const engineIsVisible = ref(false);
const input = ref<HTMLInputElement>();
const currentEngine = reactive<Engine>({
  label: "",
  url: "",
  icon: "",
});

onMounted(() => {
  Object.assign(
    currentEngine,
    JSON.parse(localStorage.getItem("engine") || JSON.stringify(engines[0]))
  );
});

const useEngine = (engine: any) => {
  localStorage.setItem("engine", JSON.stringify(engine));
  Object.assign(currentEngine, engine);
  engineIsVisible.value = false;
  input.value?.focus();
};

const search = () => {
  console.log(currentEngine.url + searchText);
  if (searchText) window.open(currentEngine.url + searchText, "_blank");
};
</script>

<template>
  <div>
    <div i-raphael-package text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/xbmlz/pkgs" target="_blank">
        Packages Search
      </a>
    </p>
    <p>
      <em text-sm op75>Include all package searches</em>
    </p>

    <div py-4 />

    <div
      mx-8
      my-2
      hidden
      flex
      shadow
      rounded
      outline-none
      py-1
      px-4
      border
      border-transparent
      dark:border-dark-200
    >
      <div
        m-auto
        flex
        items-center
        cursor-pointer
        @click="engineIsVisible = !engineIsVisible"
      >
        <div text-xl :class="currentEngine.icon" />
        <div
          mx-1
          :class="
            engineIsVisible == true
              ? ' i-carbon-caret-up'
              : 'i-carbon-caret-down'
          "
        />
      </div>
      <input
        ref="input"
        id="input"
        v-model="searchText"
        autofocus
        placeholder="Search packages | Tab switch engine"
        text-base
        outline-none
        w-full
        py-1
        px-4
        m-0
        bg-transparent
        type="text"
        autocomplete="off"
        @keydown.enter="search"
      />
      <button text-sm btn :disabled="!searchText" @click="search">
        Search
      </button>
    </div>
    <ul
      flex
      flex-row
      flex-wrap
      justify-start
      w-120
      shadow
      border
      border-transparent
      mx-8
      dark:border-dark-200
      z-750
      v-show="engineIsVisible"
    >
      <li
        v-for="(item, index) in engines"
        :key="index"
        relative
        flex
        w-20
        h-20
        items-center
        justify-center
        flex-col
        cursor-pointer
        hover:color-green-300
        m-4
        :class="currentEngine.label == item.label ? 'color-green-300' : ''"
        @click="useEngine(item)"
      >
        <div text-3xl my-2 :class="item.icon"></div>
        <span>{{ item.label }}</span>
        <div
          v-show="currentEngine.label == item.label"
          i-carbon-checkmark-filled
          absolute
          top-0
          right-0
        ></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 600;
}

.active {
  background-color: #e8f3ff;
}
</style>
