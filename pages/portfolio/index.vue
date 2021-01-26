<template>
  <div class="projects-archive-container">
    <div class="space-medium"></div>
    <ESection class="ss-projects">
      <div class="site-container">
        <EProjectList v-if="_projects" :projects="_projects" />
      </div>
    </ESection>
    <div class="space-medium"></div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
import EProjectList from '~/components/elements/e-project-list.vue'

export default {
  components: { EProjectList },
  async asyncData ( { $graphql, params } ) {
    const query = gql`
    query MyProject {
      projects {
        nodes {
          title
          slug
          content
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
          databaseId
          portfolioSettings {
            buildWidth
            dateStart
            websiteUrl
            participants {
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
              position
            }
          }
          portfolioSidebarMetabox {
            fullPreviewImage {
              mediaItemUrl
            }
          }
          projectTags {
            nodes {
              name
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }`

    const projects = await $graphql.request( query )
    return { projects: projects[ 'projects' ][ 'nodes' ] }
  },
  computed: {
    _projects () {
      if( ! this.projects ) return
      return this.projects.map( ( item ) => {
        item._featuredImage = item.featuredImage.node
        item._tags = item.projectTags.nodes.length ? item.projectTags.nodes.map( ( tag ) => tag.name ) : []
        return item
      } )
    }
  },
  head () {
    return {
      title: `Beplus — Our Projects`,
    }
  }
}
</script>