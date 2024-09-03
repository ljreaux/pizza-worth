import { computed, ref } from "vue";

export const pizzas = ref([{ size: 6, price: 22 }, { size: 8, price: 28 }])

export const pricePerSquareInch = computed(() => {
  const pizzaValues: number[] = []
  pizzas.value.forEach(pizza => {

    const area = Math.PI * Math.pow(pizza.size / 2, 2)
    pizzaValues.push(pizza.price / area)
  })
  return pizzaValues
});

export const areas = computed(() => {
  const pizzaValues =
    pizzas.value.map(pizza => Math.PI * Math.pow(pizza.size / 2, 2)
    )
  return pizzaValues
})

export const betterValue = computed(
  () => {
    if (pricePerSquareInch.value[0] == pricePerSquareInch.value[1]) return pizzas.value[0].size > pizzas.value[1].size
    else return pricePerSquareInch.value[0] > pricePerSquareInch.value[1]
  }
);