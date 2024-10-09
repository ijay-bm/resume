<template>
  <div class="relative">
    <div class="space-y-2">
      <div v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <input
          type="radio"
          class="inline-block size-6 cursor-pointer appearance-none rounded-full border-2 border-solid border-neutral-500 transition-all checked:border-gold-500"
          :name="name"
          :id="item.value || item"
          :value="item.value || item"
          v-model="modelValue"
        />
        <label :for="item.value || item" class="block cursor-pointer">
          {{ item.label || item }}
        </label>
      </div>
    </div>

    <span
      class="absolute block size-4 origin-center rounded-full bg-gold-500 transition-all duration-200 ease-in-out"
      ref="dot"
      :class="[modelValue ? 'opacity-1-0' : 'opacity-0']"
      :style="{
        top: `${dotTop}px`,
        left: `${dotLeft}px`
      }"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const modelValue = defineModel("modelValue", { required: true });

const props = defineProps({
  items: {
    type: Array
  },
  name: {
    type: String,
    required: true
  }
});

const dotTop = ref(0);
const dotLeft = ref(0);

const dot = ref(null);
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
    const selectedInput = document.querySelector(`input[name="${props.name}"]:checked`);
    if (selectedInput) {
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
