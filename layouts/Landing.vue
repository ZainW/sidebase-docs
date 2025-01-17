<script setup>
import ModulesSection from "../components/landing/ModulesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Banner from "~/components/landing/Banner.vue";
import AOS from "aos";

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <div class="relative">
    <div class="absolute top-0 right-0 select-none">
      <NuxtImg src="/green-blur.png" alt="Background Image" />
    </div>

    <Banner
        badge-text="We are hiring!"
        text="Are you interested in working on sidebase?"
        link="https://sidestream.jobs.personio.de/"
        link-text="See our open positions!"
    />

    <div class="relative">
      <article class="SidebaseContainer" id="top-section">
        <slot />
        <!--
        <div class="col-span-2 tracking-tighter">
          <AnnouncementButton label="Version 0.3.0 of nuxt-auth is now out of Alpha!" to="https://github.com/sidebase/nuxt-auth/releases/tag/0.3.0" />
          <BrandingText class="font-bold" />
          <h2 class="text-6xl font-bold text-gray-100">
            The productive Nuxt 3 starter for fullstack app development!
          </h2>
          <p class="text-gray-400 text-lg mt-4 tracking-normal">
            sidebase is a modern, best-practice, batteries-included fullstack-app starter based on Nuxt 3 and TypeScript.
          </p>
          <div class="flex items-center space-x-6 mt-10">
            <ButtonLink class="tracking-normal font-bold">
              Get started →
            </ButtonLink>
            <a href="https://github.com/sidebase/sidebase" target="_blank" class="text-gray-400 font-bold hover:text-gray-200">
              Star on GitHub
            </a>
          </div>
        </div>
        <div class="col-span-1">
          <Terminal content="npx nuxi@latest init -t community/sidebase" />
        </div>
        -->
      </article>
      <section class="pb-6">
        <div class="SidebaseContainer">
          <div class="Heading">
            <h1>
              What is <span class="GradientText">sidebase</span>?
            </h1>
            <p>
              sidebase is a production ready Nuxt 3 starter template. By hand picking battle tested modules and packages we provide a full-stack application base with amazing developer experience!
            </p>
          </div>
          <FeaturesSection />
        </div>
      </section>
      <section class="relative py-6" data-aos="fade-up">
        <div class="absolute xl:top-[-300px] 2xl:top-[-500px] left-0 select-none">
          <NuxtImg class="w-[100vw] hidden dark:block" src="/purple-blur.webp" alt="Background Image" />
        </div>
        <div class="relative SidebaseContainer">
          <div class="Heading">
            <h1>
              Our amazing <span class="GradientTextPurple">modules</span>!
            </h1>
            <p>
              Together with our main starter, we focus on developing high quality, developer experienced oriented Nuxt 3 modules.
            </p>
          </div>
          <ModulesSection />
        </div>
      </section>
      <section class="relative pt-6" data-aos="zoom-up">
        <div class="absolute bottom-[-6.9vh] left-0 select-none">
          <NuxtImg class="w-[100vw] opacity-20 dark:opacity-50" src="/glow-bottom.webp" alt="Background Image" />
        </div>
        <div class="relative SidebaseContainer">
          <div class="Heading">
            <h1>
              What do others think of <span class="GradientText">sidebase</span>?
            </h1>
            <p>
              The opinions of the community matter a lot to us! Have a look at what other developers have said about sidebase.
            </p>
          </div>
          <TestimonialsSection />
        </div>
      </section>
      <Banner
          text="Are you interested in enterprise solutions?"
          link="https://www.sidestream.tech/en/contact"
          link-text="Contact us here!"
      />
    </div>
  </div>
</template>

<style scoped>
.Heading {
  margin: 100px 0 50px 0;
}

.Heading h1 {
  font-size: 3rem;
  font-weight: bold;
}

.Heading p {
  max-width: 50rem;
  font-size: 1.3rem;
}

.GradientText {
  background: linear-gradient(to right, #7bceb6 10%, #12a87b 40%, #0FCF97 60%, #7bceb6 90%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}

.GradientTextPurple {
  background: linear-gradient(to right, #95b4ab 10%, #8136d4 40%, #9881e6 60%, #95b4ab 90%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
</style>
