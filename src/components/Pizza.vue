<script setup lang="ts">
import { computed, ref } from "vue";
import PizzaSVG from "../PizzaSVG.vue";
import { Slider } from "./ui/slider";
import { pizzas, pricePerSquareInch, areas } from "../PizzaStore";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
const scale = (
  number: number,
  [inMin, inMax]: number[],
  [outMin, outMax]: number[]
) => {
  // if you need an integer value use Math.floor or Math.ceil here
  return ((number - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
};
const props = defineProps({
  pizzaNumber: { type: Number, default: 0 },
});

const sliderValue = ref([pizzas.value[props.pizzaNumber]?.size] || [6]);
const svgWidth = computed(() =>
  scale(sliderValue.value[0], [6, 30], [100, 325])
);

const pizzaPrice = ref(pizzas.value[props.pizzaNumber]?.price || 0);
const priceLabel = computed(() => `pizza-${props.pizzaNumber + 1}-price`);
const squareInchLabel = computed(() => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const asDollars = USDollar.format(
    pricePerSquareInch.value[props.pizzaNumber] || 0
  );
  return `${asDollars} per square inch`;
});

const area = computed(() => {
  return `${areas.value[props.pizzaNumber].toFixed(3)} in<sup>2</sup>` || "0";
});
console.log(area.value);
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full">
    <div
      :width="svgWidth"
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '325px',
      }"
    >
      <PizzaSVG :width="svgWidth"></PizzaSVG>
    </div>
    <div
      class="flex items-center justify-between w-full gap-4 my-6 max-w-[325px]"
    >
      <div class="flex flex-1 gap-6">
        <Slider
          @update:modelValue="
            (event) => {
              if (event) {
                sliderValue = event;
                pizzas[props.pizzaNumber].size = event[0];
              }
            }
          "
          :modelValue="sliderValue"
          :max="30"
          :min="6"
          :step="0.5"
          class="max-w-24"
        />
        <p>{{ sliderValue[0] }}</p>
      </div>
      <div class="flex-1">
        <Label :for="priceLabel">Price</Label>
        <Input
          :id="priceLabel"
          :modelValue="pizzaPrice"
          @update:modelValue="
            (event) => {
              const numberPrice = Number(event);
              if (event) {
                pizzaPrice = numberPrice;
                pizzas[props.pizzaNumber].price = numberPrice;
              }
            }
          "
          @focus="$event.target.select()"
          type="number"
        />
      </div>
    </div>
    <p v-html="area"></p>
    <p>{{ squareInchLabel }}</p>
  </div>
</template>
