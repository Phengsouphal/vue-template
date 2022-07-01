<template>
  <Header />
  <!-- <div class="h-14" /> -->
  <div class="bg-slate-900">
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  data() {
    return {
      key: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    onChangeLanguages(event) {
      const lang = event.target.value;
      this.$i18n.locale = lang;
      localStorage.setItem("language", lang);
    },
  },
};
</script>

<style src="./assets/tailwind.css"></style>
