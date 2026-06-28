<template>
  <div class="relative">
    <div class="space-y-2">
      <label
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-2 cursor-pointer"
        :for="item.value"
      >
        <input
          type="radio"
          class="inline-block size-6 cursor-pointer appearance-none rounded-full border-2
            border-solid border-neutral-500 transition-all checked:border-bronze-500"
          :name="name"
          :id="item.value"
          :value="item.value"
          v-model="modelValue"
        />
        <label>
          {{ item.label }}
        </label>
      </label>
    </div>

    <span
      class="absolute block size-4 origin-center rounded-full bg-bronze-500 transition-all
        duration-200 ease-in-out"
      ref="dot"
      :class="[modelValue ? 'opacity-1-0' : 'opacity-0']"
      :style="{
        top: `${dotTop}px`,
        left: `${dotLeft}px`
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const modelValue = defineModel("modelValue", { required: true });

const props = defineProps<{
  items: Array<{ label: string; value: string }>;
  name: string;
}>();

const dotTop = ref(0);
const dotLeft = ref(0);

const dot = ref<HTMLElement | null>(null);
function triggerDotLaunchingAnimation() {
  if (dot.value) {
    dot.value.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.2)" },
        { transform: "scale(0.2)" },
        { transform: "scale(1) translateY(3px)" },
        { transform: "scale(1) translateY(-3px)" },
        { transform: "scale(1) translateY(3px)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 300,
        easing: "ease-in-out"
      }
    );
  }
}

function modelValueChanged() {
  if (modelValue.value) {
    const selectedInput = document.querySelector(
      `input[name="${props.name}"]:checked`
    ) as HTMLElement;
    if (selectedInput && dot.value) {
      const { offsetHeight: dotOffsetHeight, offsetWidth: dotOffsetWidth } = dot.value;

      const {
        offsetTop: targetOffsetTop,
        offsetHeight: targetOffsetHeight,
        offsetLeft: targetOffsetLeft,
        offsetWidth: targetOffsetWidth
      } = selectedInput;

      dotTop.value = Math.abs(targetOffsetTop + targetOffsetHeight / 2 - dotOffsetHeight / 2);

      dotLeft.value = Math.abs(targetOffsetLeft + targetOffsetWidth / 2 - dotOffsetWidth / 2);

      triggerDotLaunchingAnimation();
    }
  }
}

watch(modelValue, modelValueChanged);

onMounted(() => {
  modelValueChanged();
});
</script>
