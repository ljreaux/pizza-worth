<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  width: { type: Number, default: 1000 },
});

const pizzaRadius = computed(() => 0.45 * props.width);
const strokeWidth = computed(() => props.width * 0.08);
const offset = computed(
  () => props.width / 2 - pizzaRadius.value - strokeWidth.value / 2
);
const pepRadius = computed(() => props.width * 0.06);
const peperonies = [
  {
    x: computed(() => offset.value + props.width * 0.3),
    y: computed(() => offset.value + props.width * 0.3),
  },
  {
    x: computed(() => offset.value + props.width * 0.5),
    y: computed(() => offset.value + props.width * 0.22),
  },
  {
    x: computed(() => offset.value + props.width * 0.7),
    y: computed(() => offset.value + props.width * 0.3),
  },
  {
    x: computed(() => offset.value + props.width * 0.2),
    y: computed(() => offset.value + props.width * 0.5),
  },
  {
    x: computed(() => offset.value + props.width * 0.4),
    y: computed(() => offset.value + props.width * 0.4),
  },
  {
    x: computed(() => offset.value + props.width * 0.6),
    y: computed(() => offset.value + props.width * 0.4),
  },
  {
    x: computed(() => offset.value + props.width * 0.4),
    y: computed(() => offset.value + props.width * 0.6),
  },
  {
    x: computed(() => offset.value + props.width * 0.6),
    y: computed(() => offset.value + props.width * 0.6),
  },
  {
    x: computed(() => offset.value + props.width * 0.5),
    y: computed(() => offset.value + props.width * 0.5),
  },
  {
    x: computed(() => offset.value + 2 * pizzaRadius.value - props.width * 0.1),
    y: computed(() => offset.value + props.width * 0.5),
  },
  {
    x: computed(() => offset.value + props.width * 0.3),
    y: computed(
      () => offset.value + (2 * pizzaRadius.value - props.width * 0.2)
    ),
  },
  {
    x: computed(() => offset.value + props.width * 0.5),
    y: computed(
      () => offset.value + (2 * pizzaRadius.value - props.width * 0.1)
    ),
  },
  {
    x: computed(() => offset.value + props.width * 0.7),
    y: computed(
      () => offset.value + (2 * pizzaRadius.value - props.width * 0.2)
    ),
  },
];
</script>

<template>
  <svg
    :width="props.width"
    :height="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      :cx="props.width / 2"
      :cy="props.width / 2"
      :r="pizzaRadius"
      :stroke-width="strokeWidth"
      class="circle"
    />
    <circle
      v-for="pep in peperonies"
      :cx="pep.x.value"
      :cy="pep.y.value"
      :r="pepRadius"
      class="pep"
    />
  </svg>
</template>

<style scoped>
.circle {
  fill: rgb(240, 205, 4);
  stroke: rgb(220, 158, 98);
}
.pep {
  fill: rgb(222, 51, 51);
}
</style>
