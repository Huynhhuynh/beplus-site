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
                <vue-disqus shortname="http-159-89-196-91"></vue-disqus>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData ( {params} ) {
        
        var result = await axios( {
            method: 'post',
            url: `http://159.89.196.91:8686/api/collections/get/post`,
            headers: { 'Cockpit-Token': 'account-98e2e93440557872026df4a4a6ab36' },
            data: {
                filter: { 
                    published: true,
                    title_slug: params.slug,
                },
                limit: 1,
            },
        } )

        return {
            data: result.data.entries[0],
        }
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