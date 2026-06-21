<template>
  <Layout>
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>

    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-blue-400 text-white p-4 rounded">Mahasiswa</div>
      <div class="bg-green-400 text-white p-4 rounded">Dosen</div>
      <div class="bg-yellow-400 text-white p-4 rounded">Mata Kuliah</div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "../layouts/layout.vue";
</script>
