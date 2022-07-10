<script setup lang="ts">
const name = $ref('')

const search = () => {
  // TODO
}
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
      md:flex
      shadow
      rounded
      outline-none
      py-1
      px-4
      border
      border-transparent
      dark:border-dark-200
    >
      <div m-auto flex items-center>
        <div i-mdi-npm-variant-outline text-xl />
        <div i-carbon-caret-down mx-1 />
      </div>
      <input
        id="input"
        v-model="name"
        autofocus
        placeholder="Search packages ｜ Tab switch language"
        type="text"
        autocomplete="false"
        class="text-base outline-none w-full py-1 px-4 m-0 bg-transparent"
        @keydown.enter="search"
      >
    </div>
    <div>
      <button
        class="text-sm btn"
        :disabled="!name"
        @click="search"
      >
        Search
      </button>
    </div>
  </div>
</template>
