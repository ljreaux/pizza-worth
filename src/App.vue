<script setup lang="ts">
import Pizza from "@/components/Pizza.vue";
import { betterValue } from "./PizzaStore";
</script>

<template>
  <main class="merienda">
    <div class="my-12 text-center">
      <h1 class="text-5xl md:text-7xl">Pizza Worth</h1>
      <h2 class="text-2xl">Pizza Value Calculator</h2>
    </div>
    <div
      class="grid justify-center grid-cols-1 gap-3 text-center md:grid-cols-2"
    >
      <div
        class="flex flex-col gap-3 py-6 mx-2 mt-6 border border-border rounded-2xl"
      >
        <h3 class="text-4xl font-bold">Pizza A</h3>
        <Pizza :pizzaNumber="0"></Pizza>
      </div>
      <div
        class="flex flex-col gap-3 py-6 mx-2 mt-6 border border-border rounded-2xl"
      >
        <h3 class="text-4xl font-bold">Pizza B</h3>

        <Pizza :pizzaNumber="1"></Pizza>
      </div>
    </div>
    <p
      class="flex flex-col items-center justify-center w-full col-span-2 gap-2 pb-24 my-12 text-3xl font-bold text-center sm:flex-row"
    >
      Pizza
      <span class="text-7xl text-input">{{ betterValue ? "B" : "A" }}</span>
      is the better value.
    </p>
  </main>
</template>
