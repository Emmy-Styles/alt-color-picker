<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import ColorPickerComponent from '../composables/ColorPickerGame';

export default {
  setup() {
    const { colors, message, matchColor} = ColorPickerComponent();
    return { colors, message, matchColor };
  }
}
</script>

<style></style>
