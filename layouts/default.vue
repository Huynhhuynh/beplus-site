<template>
	<div id="page">
		<Header />
		<main id="site-main">
			<nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from '~/components/header/Header.vue'
import Footer from '~/components/footer/Footer.vue'

export default {
	components: {
		Header,
		Footer
	}
}
</script>
