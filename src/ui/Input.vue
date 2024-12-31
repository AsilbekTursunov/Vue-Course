<template>
  <div class="relative mb-2" :class="parentClass">
    <label :for="label" class="leading-7 text-base text-gray-700 capitalize">{{ label }}</label>
    <input
      :type="type"
      :id="label"
      :name="label"
      @input="e => onChange(e, label)"
      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    parentClass: {
      type: String,
      default: '',
    },
    onChange: {
      type: Function,
      required: true,
    },
  },
}
</script>
<style></style>
