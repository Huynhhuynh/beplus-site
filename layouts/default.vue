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
	},
	computed: {
		body_classes () {
			return this.$store.state.body_classes.join( ' ' )
		}
	},
	middleware ({ store, redirect }) {
		store.commit( 'body_remove_class', '__is-offcanvas-menu-actived' )
	},
	head () {
		return {
			bodyAttrs: {
				class: this.body_classes
			}
		}
    }
}
</script>
