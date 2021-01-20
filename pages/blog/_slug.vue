<template>
  <div class="page-single-blog">
    <div class="site-container-blog">
      <article>
        <h1>{{ post.title }}</h1>
        <div class="markdown-body __excerpt">
          <b v-html="$md.render(post.excerpt)"></b>
        </div>
        <div v-html="$md.render(post.content)" class="markdown-body __content"></div>
      </article>

      <div class="comments">
        <div class="comments-inner">
          <vue-disqus shortname="http-159-89-196-91"></vue-disqus>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'

export default {
    async asyncData ( { $graphql, params } ) {
        const slug = params.slug

        const query = gql`
        query MyPosts {
            posts {
                edges {
                node {
                    id
                    title
                    excerpt
                    slug
                    featuredImage {
                    node {
                        sourceUrl(size: LARGE)
                    }
                    }
                    tags {
                    edges {
                        node {
                        name
                        }
                    }
                    }
                    date
                    content
                }
                }
            }
        }
        `;
        
        const posts = await $graphql.request( query )
        return { data: posts[ 'posts' ][ 'edges' ][ 0 ] }
    },
    computed: {
        post () {
            if( ! this.data ) return
            let post = this.data[ 'node' ]

            if( post.tags ) {
                post._tags = post.tags.edges.map( ( tag ) => { return tag.node.name } )
            }
            
            return post
        }
    },
    head () {
        return {
            title: `Beplus blog | ${this.post.title}`,
            meta: [
                { name: 'keywords', content: ( this.post.tags.length ) ? this.post._tags.join(', ') : '' },
                { hid: 'description', name: 'description', content: this.post.excerpt }
            ]
        }
    }     
}
</script>