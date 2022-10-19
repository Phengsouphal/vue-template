<template>
  <!-- <div class="h-14" /> -->
  <div class="bg-slate-900" @scroll="handleScroll">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      key: "",
    };
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
