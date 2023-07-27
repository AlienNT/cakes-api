<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {routes} from '../../routes/helpers/names'
import RoutesList from "./components/RoutesList.vue";
import VTitle from "./components/VTitle.vue";

const darkTheme = ref(false)
const isDarkThemeMedia = computed(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
const routerFields = computed(() => routes)

onMounted(() => {
  darkTheme.value = 'isDark' in localStorage ?
      JSON.parse(localStorage.getItem('isDark')) :
      isDarkThemeMedia.value
})
watch(darkTheme, (value) => {
  localStorage.setItem('isDark', JSON.stringify(value))
  const rootElement = document.querySelector('html')

  if (value) {
    rootElement.classList.add('dark')
    rootElement.classList.remove('light')
  } else {
    rootElement.classList.add('light')
    rootElement.classList.remove('dark')
  }
})

function toggleTheme() {
  darkTheme.value = !darkTheme.value
}
</script>

<template>
  <div class="container">
    <VTitle
        title="Routes"
    />
    <RoutesList
        :routes-list="routerFields"
    />
    <button
        type="button"
        class="theme-switcher"
        @click="toggleTheme"
    >
      {{ darkTheme ? 'dark' : 'light' }}
    </button>
  </div>
</template>
<style>
#app {
  overflow-y: scroll;
  height: 100vh;
  position: relative;
}

.theme-switcher {
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:first-letter {
    text-transform: uppercase;
  }

  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
