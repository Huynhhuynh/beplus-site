<template>
    <main id="site-main">
        <div class="site-container">
            <div class="error-content">
                <a-row type="flex" justify="space-around" align="middle">
                    <a-col :md="12" :sm="24">
                        <img src="https://cdn.dribbble.com/users/418188/screenshots/6238708/tubik_moonworkers_404_page_illustration.png" alt="#">
                    </a-col>
                    <a-col :md="12" :sm="24">
                        <h1 v-if="error.statusCode === 404">Oops! The page you were looking for doesn't exist.</h1>
                        <h1 v-else>An error occurred</h1>
                        <p>You may have misstyped the address or the page may have moved.</p>
                        <nuxt-link to="/" class="button">Home page</nuxt-link>
                    </a-col>
                </a-row>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    props: ['error'],
}
</script>
