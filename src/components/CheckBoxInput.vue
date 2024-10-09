<template>
  <label class="relative flex cursor-pointer items-center" :for="id">
    <input
      class="size-6 appearance-none rounded border-2 border-solid border-neutral-500 transition-all checked:border-gold-500"
      type="checkbox"
      :id="id"
      v-model="modelValue"
      :trueValue="trueValue"
      :falseValue="falseValue"
    />
    <IFa6SolidCheck
      class="absolute left-0 h-6 w-6 p-1 text-gold-500"
      :class="[modelValue === trueValue ? 'opacity-100' : 'opacity-0']"
    />
    <span class="ml-2 cursor-pointer leading-4">{{ text }}</span>
  </label>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  trueValue: {
    default: true
  },
  falseValue: {
    default: false
  }
});

const modelValue = defineModel("modelValue", {
  required: true
});
</script>
