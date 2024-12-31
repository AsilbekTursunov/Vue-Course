<template>
  <div class="w-full flex items-center justify-between py-3">
    <RouterLink :to="{ name: 'home' }" class="text-xl text-slate-900 font-semibold">
      <div class="flex items-center gap-2 text-blue-950/80 font-mono text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-8 text-blue-950/80"
        >
          <path
            d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z"
          />
          <path
            d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"
          />
          <path
            d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z"
          />
        </svg>
        Blogs
      </div>
    </RouterLink>
    <div class="flex items-center gap-3">
      <RouterLink
        :to="{ name: 'login' }"
        class="hover:bg-blue-950/80 px-2 py-1 flex items-center justify-center hover:text-white transition-all "
        >Login</RouterLink
      >
      <RouterLink
        :to="{ name: 'register' }"
        class="hover:bg-blue-950/80 px-2 py-1 flex items-center justify-center hover:text-white transition-all "
        >Register</RouterLink
      >
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Navbar',
}
</script>
<style></style>
