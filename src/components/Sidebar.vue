<template>
  <aside class="w-64 h-full bg-slate-900 text-white p-6">
    <h2 class="text-xl font-bold mb-6">Student App</h2>

    <ul class="space-y-2">
      <li>
        <RouterLink to="/" class="block p-2 hover:bg-slate-700 rounded"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/dashboard" class="block p-2 hover:bg-slate-700 rounded"
          >Dashboard</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/profile" class="block p-2 hover:bg-slate-700 rounded"
          >Profile</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/about" class="block p-2 hover:bg-slate-700 rounded"
          >About</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/contact" class="block p-2 hover:bg-slate-700 rounded"
          >Contact</RouterLink
        >
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
