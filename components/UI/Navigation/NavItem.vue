<template>
  <NuxtLink
    :to="to"
    class="nav-link h-full flex items-center justify-center px-2 transition ease-in-out"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
});
</script>

<style lang="css" scoped>
/* exact link will show the primary color for only the exact matching link */
.nav-link.router-link-active {
  /* color: #00c58e; */
  @apply text-gray-900;
}

.nav-link {
  @apply border-transparent text-gray-500  hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium;
}
</style>
