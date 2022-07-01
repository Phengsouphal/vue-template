<template>
  <div
    class="w-full flex flex-row justify-center items-center p-3 bg-stone-800 bg-opacity-60 fixed z-20"
  >
    <div class="mx-5" v-for="(value, index) in routeList" :key="index">
      <router-link v-bind:to="value.path" class="h-5">
        <p class="mb-0 py-1 text-white uppercase">{{ value.name }}</p>
        <div class="dash-underline w-5 h-1 bg-transparent rounded-full" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  components: {},
  data() {
    return {
      routeList: [
        { path: "/", name: "About" },
        { path: "/skill", name: "Skill" },
        { path: "/experience", name: "Experience" },
        { path: "/education", name: "Education" },
        { path: "/contact", name: "Contact" },
      ],
    };
  },
};
</script>
<style scoped>
.menu-active p {
  color: #4daffe;
}

.menu-active .dash-underline {
  background: linear-gradient(to left, #5cf4fe, #4daffe);
}
</style>
