<template>
  <div class="relative">
    <img src="../assets/bg2.webp" class="w-full h-128" alt="bg" />
    <div class="w-full bg-gray-800 opacity-50 h-128 absolute top-0"></div>

    <div
      class="profile-container flex flex-col justify-center items-center absolute top-32 left-0 right-0 mx-auto"
    >
      <img
        src="../assets/logo.png"
        alt="logo"
        class="w-40 h-40 rounded-full bg-red-300"
      />
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
  <div class="container m-auto">
    <div ref="about">
      <h2
        class="text-3xl font-bold text-center py-3 text-transparent bg-clip-text bg-gradient-to-r from-light-blue-green to-light-blue"
      >
        {{ $t("hello_there") }}
      </h2>
      <p class="text-justify text-white">
        Hello, My name is <span class="font-bold">Pheng Souphal</span>. I'm 25
        years old and I finished in
        <span class="font-bold"> Software Development at Norton University</span
        >. I am a software engineer, I've 3+ years experiences with Mobile and
        Web development and achieve more than 5+ various (Web/Mobile)
        application
        <span class="font-bold"
          >Lavaral + Firebase, NestJS, Next, React, Python, Java, Laravel
          Framework, MySql, PostgreSQL</span
        >.
        <br />
        I'm a passionate learner who's always willing to learn and work across
        technologies 💡. I love to explore new technologies and leverage them to
        solve real-life problems ✨.
      </p>
      <p class="text-white">
        🛠 I’m currently working with Nestjs, Next.js, Graphql, Javascript, etc.
        <br />
        🌱 I’m currently learning (Flutter, Vue etc). <br />
        🚀 I love exploring new tech stack. <br />
        ☕ I’m coffeer and gamer.
      </p>
    </div>
    <div ref="about" class="py-3">
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
              <div class="flex flex-row flex-wrap">
                <div
                  class="w-1/2 px-3"
                  v-for="(item, index) in value.skills"
                  :key="index"
                >
                  <p class="mb-0 mt-1">{{ item?.subLabel }}</p>
                  <a-progress
                    :stroke-color="{
                      '0%': '#5cf4fe',
                      '100%': '#4daffe',
                    }"
                    :trailColor="'#a3a3a3'"
                    :percent="80"
                    :showInfo="false"
                    :strokeWidth="10"
                  />
                </div>
              </div>
            </a-collapse-panel>
            <!-- <a-collapse-panel key="2" header="This is panel header 2">
              <div class="">
                <p class="mb-0">Html</p>
                <a-progress
                  :stroke-color="{
                    '0%': '#5cf4fe',
                    '100%': '#4daffe',
                  }"
                  :trailColor="'#3d3d3d'"
                  :percent="80"
                  :showInfo="false"
                  :strokeWidth="10"
                />
              </div>
            </a-collapse-panel> -->
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
  <div class="container m-auto">
    <div class="w-full flex flex-row mb-3">
      <div class="w-3/12 h-10 bg-orange-400">
        <div
          class="h-full w-1/2 bg-emerald-900 transform hover:translate-x-full duration-1000"
        ></div>
      </div>
      <div class="w-9/12 h-10 bg-blue-700"></div>
    </div>
  </div>

  <div class="bg-slate-500 p-5" id="#contact" ref="contact">
    <div class="container contact-container m-auto">
      <h2
        class="text-3xl font-bold text-center py-3 text-transparent bg-clip-text bg-gradient-to-r from-light-blue-green to-light-blue"
      >
        {{ $t("contact_me") }}
      </h2>
      <p class="text-center">{{ $t("drop_me_contact") }}</p>
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
</template>

<script>
import { ref } from "vue";
import { CaretRightOutlined } from "@ant-design/icons-vue";
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(["1"]);
export default {
  name: "EducationPage",
  components: {
    CaretRightOutlined,
  },
  methods: {
    scroll(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo(0, top);
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
            },
            {
              subLabel: "PHP",
              percent: 80,
            },
            {
              subLabel: "Laravel",
              percent: 80,
            },
            {
              subLabel: "Python",
              percent: 80,
            },
            {
              subLabel: "Typescript",
              percent: 80,
            },
            {
              subLabel: "Java",
              percent: 80,
            },
          ],
        },
        {
          label: "frontend",
          skills: [
            {
              subLabel: "Html5",
              percent: 80,
            },
            {
              subLabel: "Css3",
              percent: 80,
            },
            {
              subLabel: "Tailwind",
              percent: 80,
            },
            {
              subLabel: "Javascript",
              percent: 80,
            },
            {
              subLabel: "Ant design",
              percent: 80,
            },
            {
              subLabel: "Bootstrap",
              percent: 80,
            },
            {
              subLabel: "Material design",
              percent: 80,
            },
            {
              subLabel: "React",
              percent: 80,
            },
            {
              subLabel: "Vue",
              percent: 80,
            },
          ],
        },
        {
          label: "mobile",
          skills: [
            {
              subLabel: "React native",
              percent: 80,
            },
            {
              subLabel: "Flutter",
              percent: 80,
            },
            {
              subLabel: "Android",
              percent: 80,
            },
          ],
        },
        {
          label: "db_management",
          skills: [
            {
              subLabel: "Mysql",
              percent: 80,
            },
            {
              subLabel: "Php myadmin",
              percent: 80,
            },
            {
              subLabel: "Postgresql",
              percent: 80,
            },
          ],
        },
        {
          label: "tool_design",
          skills: [
            {
              subLabel: "Figma",
              percent: 80,
            },
            {
              subLabel: "Adobe Photoshop",
              percent: 80,
            },
            {
              subLabel: "Adobe XD",
              percent: 80,
            },
            {
              subLabel: "Adobe Illustrator",
              percent: 80,
            },
          ],
        },
        {
          label: "other",
          skills: [
            {
              subLabel: "Firebase",
              percent: 80,
            },
            {
              subLabel: "Postmen",
              percent: 80,
            },
            {
              subLabel: "Trello",
              percent: 80,
            },
            {
              subLabel: "Gitlab",
              percent: 80,
            },
            {
              subLabel: "Github",
              percent: 80,
            },
            {
              subLabel: "Prettier",
              percent: 80,
            },
            {
              subLabel: "Socket",
              percent: 80,
            },
            {
              subLabel: "Reduxsaga",
              percent: 80,
            },
            {
              subLabel: "Recoil",
              percent: 80,
            },
            {
              subLabel: "Apollographql",
              percent: 80,
            },
          ],
        },
      ],
    };
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

.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
  vertical-align: middle;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
