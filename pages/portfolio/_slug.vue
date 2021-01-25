<template>
  <div>
    <pre v-if="_project">
      {{ _project }}
    </pre>
  </div>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  components: {},
  async asyncData ( { $graphql, params } ) {
    console.log( params )
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
    console.log( project )
    return { project: project.project }
  },
  computed: {
    _project () {
      if( ! this.project ) return
      return this.project
    }
  }
}
</script>