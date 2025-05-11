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

<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string;
    text: string;
    trueValue: boolean;
    falseValue: boolean;
  }>(),
  {
    trueValue: true,
    falseValue: false
  }
);

const modelValue = defineModel<boolean>("modelValue", { required: true });
</script>
