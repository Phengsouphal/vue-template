<template>
  <div class="relative">
    <div class="relative">
      <Header @go-section="goToSection" ref="header" />

      <img src="../assets/bg2.webp" class="w-full h-128" alt="bg" />
      <div class="w-full bg-gray-800 opacity-50 h-128 absolute top-0"></div>

      <div
        class="profile-container flex flex-col justify-center items-center absolute top-32 left-0 right-0 mx-auto"
      >
        <div class="profile" />

        <p
          class="text-center font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-light-blue-green to-light-blue shadow-2xl shadow-white my-2"
        >
          Pheng Souphal
        </p>

        <a-button
          @click="scroll('about')"
          class="mt-5 transform transition duration-500 hover:scale-110"
        >
          <img src="../assets/icons/down.svg" class="w-8 h-8" alt="bg" />
        </a-button>
      </div>
    </div>

    <section class="section" ref="about">
      <div class="container m-auto">
        <div ref="about">
          <h2
            class="text-3xl font-bold text-center py-3 text-transparent bg-clip-text bg-gradient-to-r from-light-blue-green to-light-blue"
          >
            {{ $t("About Me") }}
          </h2>
          <p class="text-justify text-white">
            Hello, My name is <span class="font-bold">Pheng Souphal</span>. I'm
            25 years old and I finished in
            <span class="font-bold">
              Software Development at Norton University</span
            >. I am a software engineer, I've 3+ years experiences with Mobile
            and Web development and achieve more than 5+ various (Web/Mobile)
            application
            <span class="font-bold"
              >Lavaral + Firebase, NestJS, Next, React, Python, Java, Laravel
              Framework, MySql, PostgreSQL</span
            >.
            <br />
            I'm a passionate learner who's always willing to learn and work
            across technologies 💡. I love to explore new technologies and
            leverage them to solve real-life problems ✨.
          </p>
          <p class="text-white">
            🛠 I’m currently working with Nestjs, Next.js, Graphql, Javascript,
            etc.
            <br />
            🌱 I’m currently learning (Flutter, Vue etc). <br />
            🚀 I love exploring new tech stack. <br />
            ☕ I’m coffeer and gamer.
          </p>
        </div>
      </div>
    </section>

    <section class="section" ref="skills">
      <div class="container m-auto">
        <div ref="skill" class="py-3">
          <h2
            class="text-3xl font-bold text-center py-3 text-transparent bg-clip-text bg-gradient-to-r from-light-blue-green to-light-blue"
          >
            {{ $t("skill") }}
          </h2>

          <div
            class="bg-white w-full flex flex-row justify-between items-center p-5 rounded-xl"
          >
            <div class="flex flex-col items-start justify-center w-3/4">
              <!-- <div
            v-for="(value, index) in mySkills"
            :key="index"
            class="w-full flex flex-row justify-start items-center py-3"
          >
            <p class="w-1/3 bg-red-500 mb-0 text-2xl">
              {{ $t(value?.label) }} :
            </p>
            <div
              class="flex w-2/3 flex-row justify-start items-center flex-wrap"
            >
              <p
                v-for="(sub_value, sub_index) in value?.value"
                :key="sub_index"
                class="mb-0 bg-orange-400 rounded-md p-1 m-2"
              >
                {{ sub_value }}
              </p>
            </div>
            <a-progress
              :stroke-color="{
                '0%': '#5cf4fe',
                '100%': '#4daffe',
              }"
              :trailColor="'#3d3d3d'"
              :percent="80"
              :showInfo="false"
            />
          </div> -->

              <a-collapse
                v-model:activeKey="activeKey"
                class="w-full bg-orange-400"
                :bordered="false"
              >
                <template #expandIcon="{ isActive }">
                  <caret-right-outlined
                    class="icon items-center self-center text-center"
                    :rotate="isActive ? 90 : 0"
                  />
                </template>
                <a-collapse-panel
                  v-for="(value, index) in mySkills"
                  :key="index + 1"
                  :header="$t(value?.label)"
                >
                  <div
                    class="flex flex-row items-center justify-start flex-wrap"
                  >
                    <a
                      v-for="(item, index) in value.skills"
                      :key="index"
                      class="mt-2 ml-2"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      :href="item.dataSrc"
                      ><img
                        :alt="item.subLabel"
                        :src="item.dataSrc"
                        style="max-width: 100%"
                    /></a>
                    <!-- <p class="mb-0 mt-1">{{ item?.subLabel }}</p>
                    <a-progress
                      :stroke-color="{
                        '0%': '#5cf4fe',
                        '100%': '#4daffe',
                      }"
                      :trailColor="'#a3a3a3'"
                      :percent="80"
                      :showInfo="false"
                      :strokeWidth="10"
                    /> -->
                  </div>
                </a-collapse-panel>
              </a-collapse>
            </div>
            <div class="flex flex-col items-center justify-center w-1/4">
              <a-button class="bg-red-300 resume-btn">
                {{ $t("my_resume") }}
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" ref="experience">
      <div class="container m-auto">
        <h2
          class="text-3xl font-bold text-center py-3 text-transparent bg-clip-text bg-gradient-to-r from-light-blue-green to-light-blue"
        >
          {{ $t("work_experience") }}
        </h2>
        <div class="w-full flex flex-row mb-3 bg-white rounded-xl">
          <div
            class="text-slate-700 text-lg w-3/12 flex flex-col justify-center items-center p-5 bg-gradient-to-r from-light-blue-green to-light-blue rounded-tl-xl rounded-bl-xl border-r"
            data-aos="fade-right"
          >
            <p class="mb-0 font-bold my-1">Software Engineer</p>
            <p class="mb-0 my-1">September 2021 - Present</p>

            <a href="https://www.linkedin.com/company/vtech-co-ltd/mycompany/">
              <p class="mb-0 my-1 text-slate-700">VTech CO.,LTD</p>
            </a>
          </div>
          <div
            class="text-slate-700 text-lg w-9/12 bg-gradient-to-r from-light-blue to-light-blue-green p-5 rounded-tr-xl rounded-br-xl border-l"
            data-aos="fade-left"
          >
            <p class="mb-0 my-1">
              - I'm currently working for VTehc to build Livestream profile and
              will show football live and other game.
            </p>
            <p class="mb-0 my-1">
              - <span class="font-semibold">Private Project </span>(API and
              admin panel are confidential of company)
            </p>
            <p class="mb-0 my-1">
              - Technologies used:<span class="font-semibold">
                NestJs, ReactJs, Tailwind, Ant Design, PHP
              </span>
            </p>
          </div>
        </div>

        <div class="w-full flex flex-row mb-3 bg-white rounded-xl">
          <div
            class="text-slate-700 text-lg w-3/12 flex flex-col justify-center items-center p-5 bg-gradient-to-r from-light-blue-green to-light-blue rounded-tl-xl rounded-bl-xl border-r"
            data-aos="fade-right"
          >
            <p class="mb-0 font-bold my-1">Mobile and Web developer</p>
            <p class="mb-0 my-1">December 2019 - October 2021</p>

            <p class="mb-0 my-1 text-slate-700">Freelancer</p>
          </div>
          <div
            class="text-slate-700 text-lg w-9/12 bg-gradient-to-r from-light-blue to-light-blue-green p-5 rounded-tr-xl rounded-br-xl border-l"
            data-aos="fade-left"
          >
            <p class="mb-0 my-1">
              - I've worked on a various freelance project. I've develop a
              mobile app, a web application and scrape data project.
            </p>
            <p class="mb-0 my-1">
              - <span class="font-semibold">Public Project Reference</span>
              <br />

              <span class="ml-5">
                +
                <a
                  href="https://www.linkedin.com/company/vtech-co-ltd/mycompany/"
                  ><span class="font-semibold">Oakas App </span></a
                >
                - This project is about posting job for disable people to find
                their job. (Backend and API) </span
              ><br />
              <span class="ml-5">
                +
                <a
                  href="https://www.linkedin.com/company/vtech-co-ltd/mycompany/"
                >
                  <span class="font-semibold">GOGO Express Partner </span>
                </a>
                - This project for partner of GOGO Express company. They can
                upload their product and GOGO express Driver can go and pick up
                their project and delivery to customer. (ReactNative) </span
              ><br />
              <span class="ml-5">
                +

                <span class="font-semibold">Scrape Data Project </span> - Scrape
                Data from a website and insert to database and send mail to
                email. (Python + PHP + Trello API)
              </span>
            </p>
            <p class="mb-0 my-1">
              - Technologies used:
              <span class="font-semibold">
                Laravel, PHP, Firebase, Python, React Native
              </span>
            </p>
          </div>
        </div>

        <div class="w-full flex flex-row mb-3 bg-white rounded-xl">
          <div
            class="text-slate-700 text-lg w-3/12 flex flex-col justify-center items-center p-5 bg-gradient-to-r from-light-blue-green to-light-blue rounded-tl-xl rounded-bl-xl border-r"
            data-aos="fade-right"
          >
            <p class="mb-0 font-bold my-1">Mobile and Web developer</p>
            <p class="mb-0 my-1">September 2021 - Present</p>

            <a href="https://bi-kay.com/">
              <p class="mb-0 my-1 text-slate-700">Bikay Company</p>
            </a>
          </div>
          <div
            class="text-slate-700 text-lg w-9/12 bg-gradient-to-r from-light-blue to-light-blue-green p-5 rounded-tr-xl rounded-br-xl border-l"
            data-aos="fade-left"
          >
            <p class="mb-0 my-1">
              - I've worked for a year at Bikay company located in Phnom Penh.
              I've develop 2 mobile app, and 2 web application include backend.
            </p>
            <p class="mb-0 my-1">
              - <span class="font-semibold">Public Project Reference</span>
              <br />

              <span class="ml-5">
                +
                <a
                  href="https://www.linkedin.com/company/vtech-co-ltd/mycompany/"
                  ><span class="font-semibold">Angkor Salad App </span></a
                >
                - Farmer, Collector and Dealer can find each in this app and
                Farmer can know how to grow some vegetable base instruction.
                (ReactNative)</span
              ><br />
              <span class="ml-5">
                +
                <a
                  href="https://www.linkedin.com/company/vtech-co-ltd/mycompany/"
                >
                  <span class="font-semibold">Waste Tracker </span>
                </a>
                - You can find out information about garbage collection
                schedule, collection services,and best practices of waste
                disposal in select Cambodian cities. (ReactNative) </span
              ><br />
              <span class="ml-5">
                +

                <span class="font-semibold">Two Project </span> - Backend
                (Laravel with Firebase)
              </span>
            </p>
            <p class="mb-0 my-1">
              - Technologies used:
              <span class="font-semibold">
                Laravel, PHP, Firebase, React Native
              </span>
            </p>
          </div>
        </div>

        <div class="w-full flex flex-row mb-3 bg-white rounded-xl">
          <div
            class="text-slate-700 text-lg w-3/12 flex flex-col justify-center items-center p-5 bg-gradient-to-r from-light-blue-green to-light-blue rounded-tl-xl rounded-bl-xl border-r"
            data-aos="fade-right"
          >
            <p class="mb-0 font-bold my-1">Web developer</p>
            <p class="mb-0 my-1">February 2018 - November 2019</p>

            <a href="https://www.linkedin.com/company/vtech-co-ltd/mycompany/">
              <p class="mb-0 my-1 text-slate-700">VTech CO.,LTD</p>
            </a>
          </div>
          <div
            class="text-slate-700 text-lg w-9/12 bg-gradient-to-r from-light-blue to-light-blue-green p-5 rounded-tr-xl rounded-br-xl border-l"
            data-aos="fade-left"
          >
            <p class="mb-0 my-1">
              - I've worked almost 1 year for a Iota Asia company located in the
              Phnom Penh.
            </p>
            <p class="mb-0 my-1">
              - <span class="font-semibold">Private Project </span>(API and
              admin panel are confidential of company)
            </p>
            <p class="mb-0 my-1">
              - Technologies used:<span class="font-semibold">
                JAVA, Vaadin Framework, Html, Css, Javascript
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" ref="contact">
      <div class="bg-slate-500 p-5 mt-5" id="#contact" ref="contact">
        <div class="container contact-container m-auto">
          <h2
            class="text-3xl font-bold text-center py-3 text-transparent bg-clip-text bg-gradient-to-r from-light-blue-green to-light-blue"
          >
            {{ $t("contact_me") }}
          </h2>
          <p class="text-center text-white">{{ $t("drop_me_contact") }}</p>
          <div class="flex flex-row justify-center items-center">
            <a
              v-for="(value, index) in contactList"
              :key="index"
              v-bind:href="value.href"
              target="blank"
            >
              <!-- <img v-bind:src="value.icon" class="w-6 h-6 mx-2" alt="bg" />
           -->
              <div v-bind:class="'logo ' + value.class"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "../components/Header/Header.vue";
import { CaretRightOutlined } from "@ant-design/icons-vue";
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(["1", "2", "3", "4", "5"]);
var isScrolling;

export default {
  name: "EducationPage",
  components: {
    CaretRightOutlined,
    Header,
  },
  methods: {
    scroll(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo(0, top);
    },

    goToSection(value) {
      const top = this.$refs[value].offsetTop;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    },

    handleScroll() {
      const skillHeight =
        this.$refs["skills"].clientHeight + this.$refs["skills"].offsetTop;
      const aboutHeight =
        this.$refs["about"].clientHeight + this.$refs["about"].offsetTop;
      const experienceHeight =
        this.$refs["experience"].clientHeight +
        this.$refs["experience"].offsetTop;
      const contactHeight =
        this.$refs["contact"].clientHeight + this.$refs["contact"].offsetTop;

      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        switch (true) {
          case window.scrollY <= aboutHeight:
            this.$refs.header?.setActiveMenu("about");
            break;
          case window.scrollY <= skillHeight:
            this.$refs.header?.setActiveMenu("skills");
            break;
          case window.scrollY <= experienceHeight:
            this.$refs.header?.setActiveMenu("experience");
            break;
          case window.scrollY <= contactHeight:
            this.$refs.header?.setActiveMenu("contact");
            break;
          default:
        }
      }, 300);

      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      const showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.$refs.header?.setHideShowMenu(showNavbar);
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  data() {
    return {
      text,
      activeKey,
      contactList: [
        {
          href: "https://github.com/Phengsouphal",
          class: "github",
        },
        {
          href: "https://www.linkedin.com/in/souphal-pheng-233449225",
          class: "linkedin",
        },
        {
          href: "https://t.me/souphal",
          class: "telegram",
        },
        {
          href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&cc=rimsila.itc@gmail&su=From+GitHub&to=phengsouphal@gmail.com&body=Hi,+there.+Found+you+from+GitHub.",
          class: "mail",
        },
        {
          href: "https://www.facebook.com/pheng.sophal.94",
          class: "facebook",
        },
      ],

      mySkills: [
        {
          label: "backend",
          skills: [
            {
              subLabel: "Nest.js",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-NestJs-ea2845?style=flat-square&logo=nestjs&logoColor=white",
            },
            {
              subLabel: "PHP",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=PHP&logoColor=white",
            },
            {
              subLabel: "Laravel",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Laravel-FF2D20?style=flat-square&logo=Laravel&logoColor=white",
            },
            {
              subLabel: "Python",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white",
            },
            {
              subLabel: "Typescript",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
            },
            {
              subLabel: "Java",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Java-5496c4?style=flat-square&logo=java&logoColor=white",
            },
          ],
        },
        {
          label: "frontend",
          skills: [
            {
              subLabel: "Html5",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
            },
            {
              subLabel: "Css3",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white",
            },
            {
              subLabel: "Tailwind",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white",
            },
            {
              subLabel: "Javascript",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white",
            },
            {
              subLabel: "Ant design",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white",
            },
            {
              subLabel: "Bootstrap",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white",
            },
            {
              subLabel: "Material design",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Materialdesign-757575?style=flat-square&logo=materialdesign&logoColor=white",
            },
            {
              subLabel: "React",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white",
            },
            {
              subLabel: "Vue",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-vuedotjs-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white",
            },
          ],
        },
        {
          label: "mobile",
          skills: [
            {
              subLabel: "React native",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-React Native-45b8d8?style=flat-square&logo=react&logoColor=white",
            },
            {
              subLabel: "Flutter",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Flutter-02569B?style=flat-square&logo=Flutter&logoColor=white",
            },
            {
              subLabel: "Android",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=Android&logoColor=white",
            },
          ],
        },
        {
          label: "db_management",
          skills: [
            {
              subLabel: "Mysql",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white",
            },
            {
              subLabel: "Php myadmin",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-phpMyAdmin-6C78AF?style=flat-square&logo=phpMyAdmin&logoColor=white",
            },
            {
              subLabel: "PostgreSQL",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white",
            },
          ],
        },
        {
          label: "tool_design",
          skills: [
            {
              subLabel: "Figma",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white",
            },
            {
              subLabel: "Adobe Photoshop",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Adobe_Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white",
            },
            {
              subLabel: "Adobe XD",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-XD-FF61F6?style=flat-square&logo=adobexd&logoColor=white",
            },
            {
              subLabel: "Adobe Illustrator",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Adobe_Illustrator-FF9A00?style=flat-square&logo=adobeillustrator&logoColor=white",
            },
          ],
        },
        {
          label: "other",
          skills: [
            {
              subLabel: "Firebase",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white",
            },
            {
              subLabel: "DigitalOcean",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-DigitalOcean-0080FF?style=flat-square&logo=DigitalOcean&logoColor=white",
            },
            {
              subLabel: "Postmen",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white",
            },
            {
              subLabel: "Trello",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Trello-0052CC?style=flat-square&logo=Trello&logoColor=white",
            },
            {
              subLabel: "Socket io",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white",
            },
            {
              subLabel: "Prettier",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white",
            },

            {
              subLabel: "Reduxsaga",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-reduxsaga-45b8d8?style=flat-square&logo=reduxsaga&logoColor=white",
            },
            {
              subLabel: "Recoil",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-Recoil-f52718?style=flat-square&logo=recoil&logoColor=white",
            },
            {
              subLabel: "Apollographql",
              percent: 80,
              dataSrc:
                "https://img.shields.io/badge/-apollographql-311C87?style=flat-square&logo=apollographql&logoColor=white",
            },
          ],
        },
      ],

      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.resume-btn,
.resume-btn:hover,
.resume-btn:focus,
.resume-btn:active {
  background: linear-gradient(to left, #5cf4fe, #4daffe);
  padding: 0px 15px;
  border-radius: 20px;
}

.logo {
  width: 25px;
  height: 25px;
  margin: 0px 5px;
  background: linear-gradient(to left, #5cf4fe, #4daffe);
}

.github {
  -webkit-mask: url("/src/assets/icons/github.svg") no-repeat center;
  mask: url("/src/assets/icons/github.svg") no-repeat center;
}

.facebook {
  -webkit-mask: url("/src/assets/icons/facebook.svg") no-repeat center;
  mask: url("/src/assets/icons/facebook.svg") no-repeat center;
}

.mail {
  -webkit-mask: url("/src/assets/icons/envelope.svg") no-repeat center;
  mask: url("/src/assets/icons/envelope.svg") no-repeat center;
}

.linkedin {
  -webkit-mask: url("/src/assets/icons/linkedin-brands.svg") no-repeat center;
  mask: url("/src/assets/icons/linkedin-brands.svg") no-repeat center;
}

.telegram {
  -webkit-mask: url("/src/assets/icons/telegram.svg") no-repeat center;
  mask: url("/src/assets/icons/telegram.svg") no-repeat center;
}

.ant-collapse {
  background: transparent;
}

.profile {
  width: 150px;
  height: 150px;
  display: inline-block;
  border-radius: 50%;
  background-image: url(https://github.com/Phengsouphal/Phengsouphal/raw/master/PHENG_SOUPHAL.JPG);
  background-size: cover;
  background-position: center;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
  vertical-align: middle;
}
</style>
