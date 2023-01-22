<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'm-button',
  props: {
    text: {
      default: "",
      required: true,
      type: String
    }
  }
}
</script>
