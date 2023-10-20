<template>
  <div class="input-field">
    <label>{{ label }}</label>
    <input type="text" v-bind:value="value" @input="$emit('input', $event.target.value)" :required="required">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>

</style>
