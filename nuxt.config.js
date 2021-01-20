
module.exports = {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700|Varela+Round&display=swap&subset=vietnamese' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Caveat&display=swap' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700&display=swap' },
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#ff6b00' },
	/*
	** Global CSS
	*/
	css: [ 
		'ant-design-vue/dist/antd.css',
		'github-markdown-css/github-markdown.css',
		'highlight.js/styles/github.css',
		'~/assets/scss/main.scss'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@/plugins/antd-ui',
		'@/plugins/disqus',
		{
			src: '@/plugins/owl',
			ssr: false
		}
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [],
	/*
	** Nuxt.js modules
	*/
	modules: [ 
		['nuxt-i18n', {
		locales: [
			{
			code: 'en',
			name: 'English',
			file: 'en.js'
			},
			{
			code: 'vi',
			name: 'Vietnamese',
			file: 'vi.js'
			}
		],
		lazy: true,
		loadLanguagesAsync: true,
		langDir: 'locales/',
		defaultLocale: 'en',
		} ],
		'@nuxtjs/markdownit',
		'nuxt-graphql-request',
	],
	graphql: {
    endpoint: 'http://159.89.194.38:8080/graphql',
    options: {},
    useFetchPolyfill: true,
    includeNodeModules: true,
  },
	markdownit: {
		html: true,
		breaks: true,
		linkify: false,
		injected: true,
		xhtmlOut: true,
		langPrefix: 'md-',
		highlight: function(str, lang) {
			const hljs = require('highlight.js');
			if (lang && hljs.getLanguage(lang)) {
				try {
				return '<pre class="hljs"><code>' +
					hljs.highlight(lang, str, true).value +
					'</code></pre>';
				} catch (__) {}
			}
			return '<pre class="hljs"><code>' + hljs.highlight('plaintext', str, true).value + '</code></pre>'
		}
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
	}
}
