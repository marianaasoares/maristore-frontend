<template>
  <m-card title="Meu card">
    <template v-slot:text>
      Slot text do meu card
    </template>
    <template v-slot:actions>
      <m-button>ok</m-button>
    </template>
  </m-card>
</template>

<script>
import MButton from "../../components/common/MButton.vue";
import MCard from "../../components/common/MCard.vue";

export default {
  name: "Home",
  components: {MCard, MButton},
  methods: {
    generateAlert() {
      alert("aaaaaaaaaaaaa")
    }
  }
}
</script>

