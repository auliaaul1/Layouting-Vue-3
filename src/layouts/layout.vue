<template>
  <div class="fixed inset-0 flex flex-col bg-gray-100">
    <!-- HEADER -->
    <Header />

    <!-- BODY -->
    <div class="flex flex-1 overflow-hidden">
      <!-- SIDEBAR -->
      <Sidebar class="w-64 shrink-0" />

      <!-- CONTENT -->
      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
