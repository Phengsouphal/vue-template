import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./i18n";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

createApp(App).use(i18n).use(router).use(Antd).use(AOS).mount("#app");
