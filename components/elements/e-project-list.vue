<template>
  <div class="project-list-block">
    <div class="project-item" v-for="( project ) in projects" :key="project.databaseId">
      <a-row :gutter=60 type="flex" align="middle">
        <a-col :md="{ span: 12 }" :sm="{ span: 24 }">
          <div class="project-thumb">
            <nuxt-link :to="'/portfolio/' + project.slug">
              <img :src="project._featuredImage.mediaItemUrl" :alt="project._featuredImage.altText">
            </nuxt-link>
          </div>
        </a-col>
        <a-col :md="{ span: 12 }" :sm="{ span: 24 }">
          <div class="project-detail">
            <div class="tag-list" v-if="project._tags">{{ project._tags.join( ', ' ) }}</div>
            <h4>
              <nuxt-link :to="'/portfolio/' + project.slug">{{ project.title }}</nuxt-link>
            </h4>
            <p v-html="project.content"></p>
            <div class="project-site">
              <span class="_label">Website</span>: 
              <span class="_value">
                <a :href="project.portfolioSettings.websiteUrl" target="_blank">{{ project.portfolioSettings.websiteUrl }}</a>
              </span>
            </div>
            <div class="date-start">
              <span class="_label">Start date</span>: 
              <span class="_value">{{ project.portfolioSettings.dateStart }}</span>
            </div>
            <div class="build-width">
              <span class="_label">Build width</span>:   
              <span class="_value">{{ project.portfolioSettings.buildWidth.join( ', ' ) }}</span>
            </div>
            <div class="participants" v-if="project.portfolioSettings.participants">
              <EUserGroup :users="project.portfolioSettings.participants" />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import EUserGroup from '~/components/elements/e-user-group.vue'

export default {
  components: { EUserGroup },
  props: [ 'projects' ]
}
</script>

<style lang="scss">
  .project-list-block {

    .project-item {
      margin-bottom: 6vw;

      .project-thumb {

        a {
          display: block;

          img {
            width: 100%;
            border: solid 1px #eee;
            border-radius: 3px;
          }
        }
      }

      .project-detail {
        margin: 25px 0
      }
    }

  }
</style>