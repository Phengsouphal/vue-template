<template>
  <a-select
    ref="select"
    style="width: 120px"
    :defaultValue="defaultLang"
    @change="handleChange"
  >
    <a-select-option
      v-for="(item, index) in languages"
      :key="index"
      v-bind:value="item.value"
    >
      {{ item.last }}
    </a-select-option>
  </a-select>

  <h3 v-for="(item, index) in languages" :key="index">
    {{ item.frist }}
    {{ item.last }}
    {{ defaultLang }}
  </h3>
</template>
<script>
import { ref } from "vue";

export default {
  name: "ChangeLanguages",
  components: {},
  data() {
    return {
      defaultLang: ref(localStorage.getItem("language")),
      languages: [
        { value: "kh", last: "Khmer" },
        { value: "en", last: "English" },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
      const lang = value;
      this.$i18n.locale = lang;
      localStorage.setItem("language", lang);
    },
  },
};
</script>
