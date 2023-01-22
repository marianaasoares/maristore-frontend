<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <slot name="text"></slot>
      <div class="card-actions justify-end">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MCard",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>