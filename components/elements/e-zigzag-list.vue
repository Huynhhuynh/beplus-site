<template>
  <div class="zigzag-list-block">
    <div class="service-item" v-for="(item, index) in services" :key="index">
      <div class="service-image">
        <img :src="item.image" alt="#">
      </div>
      <div class="service-entry">
        <h4>{{ item.title }}</h4>
        <p v-html="item.content"></p>
        <a class="button" :href="item.button.link" target="_blank">{{ item.button.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'services' ]
}
</script>