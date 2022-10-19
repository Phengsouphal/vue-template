<template>
  <div
    id="navbar"
    v-show="showNavbar"
    class="nav-bar w-full flex flex-row justify-center items-center p-3 bg-stone-800 bg-opacity-60 fixed z-20"
  >
    <div class="mx-5" v-for="(value, index) in routeList" :key="index">
      <a
        href="#"
        @click.prevent="goSection(value.ref)"
        :class="value.ref === activeMenu && 'menu-active'"
      >
        <p class="mb-0 py-1 text-white uppercase">{{ value.name }}</p>
        <div class="dash-underline w-5 h-1 bg-transparent rounded-full" />
      </a>
      <!-- <router-link v-bind:to="value.path" class="h-5">
        <p class="mb-0 py-1 text-white uppercase">{{ value.name }}</p>
        <div class="dash-underline w-5 h-1 bg-transparent rounded-full" />
      </router-link> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  components: {},
  data() {
    return {
      showNavbar: true,
      activeMenu: "about",
      routeList: [
        { path: "/", name: "About", ref: "about" },
        { path: "/skill", name: "Skill", ref: "skills" },
        { path: "/experience", name: "Experience", ref: "experience" },
        { path: "/contact", name: "Contact", ref: "contact" },
      ],
    };
  },
  methods: {
    goSection(val) {
      this.activeMenu = val;
      this.$emit("go-section", val);
    },
    setActiveMenu(val) {
      this.activeMenu = val;
    },
    setHideShowMenu(val) {
      if (val) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-58px";
      }
    },
  },
};
</script>
<style scoped>
.nav-bar {
  transition: top 0.3s;
}
.menu-active p {
  color: #4daffe;
}

.menu-active .dash-underline {
  background: linear-gradient(to left, #5cf4fe, #4daffe);
}
</style>
