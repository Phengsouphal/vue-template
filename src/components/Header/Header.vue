<template>
  <div class="relative">
    <div
      id="navbar"
      v-show="showNavbar"
      class="nav-bar w-full flex-row justify-center items-center p-3 bg-stone-800 bg-opacity-60 fixed z-20 hidden sm:flex"
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

    <div
      class="flex items-center sm:hidden opacity-100 z-20 absolute right-8 top-5"
    >
      <a-button
        @click="showDrawer()"
        class="transform transition duration-500 hover:scale-110"
      >
        <svg
          class="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </a-button>

      <a-drawer
        width="50%"
        v-model:visible="visibleDrawer"
        class="custom-class"
        :closable="false"
        placement="right"
        @after-visible-change="afterVisibleChange"
      >
        <div class="bg-slate-900 h-full">
          <div class="w-full flex items-center justify-center bg-white">
            <img src="../../assets/brand.png" class="w-1/3" alt="bg" />
          </div>
          <div class="flex flex-col w-full items-start justify-center">
            <div
              v-for="(value, index) in routeList"
              class="mt-5 px-5"
              :key="index"
            >
              <a-button
                @click="goSection(value.ref)"
                class="transform transition duration-500 hover:scale-110"
                :class="value.ref === activeMenu && 'menu-active'"
              >
                <p class="mb-0 py-1 text-white uppercase">{{ value.name }}</p>
                <div
                  class="dash-underline w-5 h-1 bg-transparent rounded-full"
                />
              </a-button>
            </div>
          </div>
        </div>
      </a-drawer>
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
      visibleDrawer: false,
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
    showDrawer() {
      this.visibleDrawer = true;
    },

    afterVisibleChange(bool) {
      console.log("visible", bool);
    },

    goSection(val) {
      if (this.visibleDrawer) {
        this.visibleDrawer = false;
      }
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
.ant-btn,
.ant-btn:hover,
.ant-btn:focus,
.ant-btn:active {
  padding: 0px;
  border: none;
  color: white;
  background: transparent;
}
.nav-bar {
  transition: top 0.3s;
}
.menu-active p {
  color: #4daffe;
}

.menu-active .dash-underline {
  background: linear-gradient(to left, #5cf4fe, #4daffe);
}
:global(.custom-class .ant-drawer-body) {
  padding: 0px;
}
</style>
