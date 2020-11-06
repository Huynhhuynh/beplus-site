<template>
    <div class="page-single-blog">
        <div class="site-container-blog">
            <article>
                <h1>{{ data.title }}</h1>
                <div class="markdown-body __excerpt">
                    <b v-html="$md.render(data.excerpt)"></b>
                </div>
                <div v-html="$md.render(data.content)" class="markdown-body __content"></div>
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
                }
                }
            }
        }
        `;
        
        const posts = await $graphql.request( query );
        return { data }
    },
    head () {
        return {
            title: `Beplus blog | ${this.data.title}`,
            meta: [
                { name: 'keywords', content: ( this.data.tags.length ) ? this.data.tags.join(', ') : '' },
                { hid: 'description', name: 'description', content: this.data.excerpt }
            ]
        }
    }     
}
</script>