<template>
  <div>
    <h2 class="text-red-700 text-3xl font-bold">{{ $t("experience") }}</h2>
    <a-button>Add</a-button>
  </div>
  <ChangeLanguages />
</template>

<script>
import ChangeLanguages from "../components/ChangeLanguages/ChangeLanguages.vue";

export default {
  name: "ExperiencePage",
  components: {
    ChangeLanguages,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
