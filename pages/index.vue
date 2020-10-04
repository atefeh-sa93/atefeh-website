<template>
  <div>
    <!--start Banner Section!-->
    <section>
      <BannerSection />
    </section>
    <!--End Banner Section!-->

    <!--Start About Section!-->
    <section>
      <AboutSection />
    </section>
    <!--End About Section!-->

    <!--Start Service Section!-->
    <section>
      <ServiceSection />
    </section>
    <!--End Service Section!-->

    <!--Start Blog Section!-->
    <section>
      <BlogSection />
    </section>
    <!--End Blog Section!-->

    <!--Start Contact Section!-->
    <section>
      <ContactSection />
    </section>
    <!--End Contact Section!-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BannerSection from '~/components/Main/BannerSection.vue'
import AboutSection from '~/components/Main/AboutSection.vue'
import ServiceSection from '~/components/Main/ServiceSection.vue'
import BlogSection from '~/components/Main/BlogSection.vue'
import contactSection from '~/components/Main/contactSection.vue'

@Component({ components: { BannerSection, AboutSection, ServiceSection, BlogSection, contactSection } })

export default Vue.extend({
})
</script>

<style>

</style>
