import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./i18n";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(i18n).use(router).use(Antd).mount("#app");
