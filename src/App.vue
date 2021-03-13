<template>
  <Nav />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/core/components/Nav.vue";

export default defineComponent({
  components: {
    Nav
  }
});
</script>
