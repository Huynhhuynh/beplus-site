<template>
  <div>
    <div class="space-medium"></div>
    <ESection class="ss-project-single">
      <div class="site-container">
        <div class="project-entry-summary">
          <div class="project-image-preview">
            <img 
              :src="_project.portfolioSidebarMetabox.fullPreviewImage.mediaItemUrl" 
              :alt="_project.portfolioSidebarMetabox.fullPreviewImage.altText">
          </div>
          <div class="project-sitebar">
            <div class="project-detail">
              <div class="tag-list" v-if="_project._tags">{{ _project._tags.join( ', ' ) }}</div>
              <h4>{{ _project.title }}</h4>
              <p v-html="_project.content"></p>
              <div class="project-site">
                <span class="_label">Website</span>: 
                <span class="_value">
                  <a :href="_project.portfolioSettings.websiteUrl" target="_blank">{{ _project.portfolioSettings.websiteUrl }}</a>
                </span>
              </div>
              <div class="date-start">
                <span class="_label">Start date</span>: 
                <span class="_value">{{ _project.portfolioSettings.dateStart }}</span>
              </div>
              <div class="build-width">
                <span class="_label">Build width</span>:   
                <span class="_value">{{ _project.portfolioSettings.buildWidth.join( ', ' ) }}</span>
              </div>
              <div class="participants" v-if="_project.portfolioSettings.participants">
                <EUserGroup :users="_project.portfolioSettings.participants" />
              </div>
            </div> 
          </div>
        </div>
      </div>
    </ESection>
    <div class="space-medium"></div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
import EUserGroup from '~/components/elements/e-user-group.vue'

export default {
  components: { EUserGroup },
  async asyncData ( { $graphql, params } ) {
    const query = gql`
    query MyProject {
      project(id: "${ params.slug }", idType: SLUG) {
        id
        databaseId
        content
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        projectTags {
          nodes {
            name
          }
        }
        portfolioSettings {
          buildWidth
          dateStart
          websiteUrl
          participants {
            position
            member {
              ... on Team {
                id
                title
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
        portfolioSidebarMetabox {
          fullPreviewImage {
            altText
            mediaItemUrl
          }
        }
        projectId
      }
    }
    `
    const project = await $graphql.request( query )
    return { project: project.project }
  },
  computed: {
    _project () {
      if( ! this.project ) return
      this.project._featuredImage = this.project.featuredImage.node
      this.project._tags = this.project.projectTags.nodes.length ? this.project.projectTags.nodes.map( ( tag ) => tag.name ) : []
      
      return this.project
    }
  }
}
</script>

<style lang="scss">
  .ss-project-single {

    .project-entry-summary {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .project-image-preview {
        width: 60%;

        @media(max-width: 425px) {
          width: 100%;
          margin-bottom: 30px;
        }

        img {
          line-height: 0;
          border: solid 1px #eee;
          border-radius: 3px;
          background: #FFF;
          width: 100%;
        }
      }

      .project-sitebar {
        width: 35%;

        @media(max-width: 425px) {
          width: 100%;
        }

        .project-detail {
          position: sticky;
          top: 30px;
          bottom: 30px;
        }
      }
    }
  }
</style>