<template>
  <Layout>
    <h2 class="text-3xl font-bold mb-6">Selamat Datang 👋</h2>

    <p class="text-gray-600 mb-8">Sistem Informasi Akademik Mahasiswa</p>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-blue-500 text-white p-6 rounded-xl shadow">
        <h3>Total Mahasiswa</h3>
        <p class="text-4xl mt-2">120</p>
      </div>

      <div class="bg-green-500 text-white p-6 rounded-xl shadow">
        <h3>Total Dosen</h3>
        <p class="text-4xl mt-2">25</p>
      </div>

      <div class="bg-orange-500 text-white p-6 rounded-xl shadow">
        <h3>Mata Kuliah</h3>
        <p class="text-4xl mt-2">40</p>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "../layouts/layout.vue";
</script>
