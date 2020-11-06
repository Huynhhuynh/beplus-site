<template>
    <div class="page-blog">
        <div class="site-container-blog">
            <div class="post-list" v-if="entries">
                <div class="post-item" v-for="p in entries" :key="p.id">
                    <h2 class="post-title">
                        <nuxt-link :to="{ name: 'blog-slug___en', params: { slug: p.slug } }">{{ p.title }}</nuxt-link>
                    </h2>
                    <div class="post-metas">
                        <div class="post-created">{{ p.date }}</div>
                        <div class="post-tag" v-if="p._tags">in {{ p._tags.join( ', ' ) }}</div>
                    </div>
                    <div class="post-excerpt" v-html="p.excerpt"></div>
                    <nuxt-link :to="{ name: 'blog-slug___en', params: { slug: p.slug } }" class="read-more" append>
                        Read more
                        <span class="arrow-icon">
                            <svg x="0px" y="0px" viewBox="0 0 476.213 476.213" xml:space="preserve"> <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                        </span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gql } from 'graphql-request'

export default {
    async asyncData ( { $graphql, params } ) {
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
                }
                }
            }
        }
        `;
        
        const posts = await $graphql.request( query );
        return { posts: posts[ 'posts' ][ 'edges' ] };
    },
    computed: {
        entries () {
            if( ! this.posts ) return

            return this.posts.map( ( item ) => {
                let post = item[ 'node' ]

                if( post.tags ) {
                    post._tags = post.tags.edges.map( ( tag ) => { return tag.node.name } )
                }
                    

                return post
            } )
        }
    }
}
</script>
