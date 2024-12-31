<template>
  <div class="">
    <div class="container mx-auto ">
      <div class="border-b">
        <Navbar />
      </div>
      <RouterView />
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
}
</script>
<style></style>
