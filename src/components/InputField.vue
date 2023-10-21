<template>
  <div class="input-field">
    <label>{{ label }}</label>
    <input :type="type" :value="value" @input="$emit('update:value', $event.target.value)" :required="required" />
  </div>
</template>

<script setup>
defineProps({
  type: String,
  label: String,
  value: String,
  required: Boolean,
});

defineEmits(['update:value'])
</script>
