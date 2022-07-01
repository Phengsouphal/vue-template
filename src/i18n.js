import { createI18n } from "vue-i18n";
import messages from "./locales/index";

const lang = localStorage.getItem("language");

export const i18n = createI18n({
  locale: lang != null ? lang : "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});
