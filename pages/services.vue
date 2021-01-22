<template>
  <div class="services-page-container site-container">
    <div class="space-medium"></div>
    <ZigZagList :services="services" />
    <div class="space-medium"></div>
  </div> 
</template>

<script>
import ZigZagList from '~/components/elements/e-zigzag-list.vue'

export default {
  components: { ZigZagList },
  data: () => {
    return {
      services: [
        {
          image: 'https://cdn.dribbble.com/users/1621488/screenshots/9528403/media/ac3431263494cb1a0a4bb1a1264a7e79.png?compress=1&resize=800x600',
          title: 'Build WordPress Plugin & Theme',
          content: 'We have many years of experience in developing WordPress plugin or theme. A team of professionals who are enthusiastic and responsible and have participated in many projects to build WordPress website about <u>Business</u>, <u>WooCommerce</u>, <u>Booking</u>, etc.',
          button: {
            text: 'Contact Us',
            link: '/contact',
          }
        },
        {
          image: 'https://cdn.dribbble.com/users/428595/screenshots/13644711/media/0d8ec5f8cda17abf36d40687c44984f7.png?compress=1&resize=800x600',
          title: 'Langding Page & Email Template',
          content: 'We have many years of experience in developing WordPress plugin or theme. A team of professionals who are enthusiastic and responsible and have participated in many projects to build WordPress website about Business, WooCommerce, Booking, etc.',
          button: {
            text: 'Contact Us',
            link: '/contact',
          }
        },
        {
          image: 'https://cdn.dribbble.com/users/2001748/screenshots/10479422/media/52cdfb2f488fcaf351daa38141558022.png?compress=1&resize=800x600',
          title: 'Web Application',
          content: 'We have many years of experience in developing WordPress plugin or theme. A team of professionals who are enthusiastic and responsible and have participated in many projects to build WordPress website about Business, WooCommerce, Booking, etc.',
          button: {
            text: 'Contact Us',
            link: '/contact',
          }
        },
        {
          image: 'https://cdn.dribbble.com/users/32512/screenshots/6885179/media/f49670f27cdd06d278d0ae54e5cd152a.png?compress=1&resize=800x600',
          title: 'Optimizing Site Loading Speed',
          content: 'We have many years of experience in developing WordPress plugin or theme. A team of professionals who are enthusiastic and responsible and have participated in many projects to build WordPress website about Business, WooCommerce, Booking, etc.',
          button: {
            text: 'Contact Us',
            link: '/contact',
          }
        },
      ]
    }
  }
}
</script>
