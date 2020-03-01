<template>
	<div>
		<ESection class="ss-home-banner" padding="10vh 0" background-color="#000" background-img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">
			<div class="site-container">
				<a-row :gutter="100" type="flex" justify="space-around" align="middle">
					<a-col :md="12" :sm="24">
						<div class="entry-text">
							<h1>{{ $t('welcome_home_bannber') }}</h1>
							<p>{{ $t('welcome_home_bannber_sub') }}</p>
						</div>
					</a-col>
					<a-col :md="12" :sm="24">
						<div class="entry-contact-form">
							<EContactform title="Let’s talk about everything!" sub-title="Ask us anything or just say hi..." />
						</div>
					</a-col>
				</a-row>
			</div>
		</ESection>

		<ESection class="ss-client-brand">
			<div class="site-container">
				<ul>
					<li v-for="client_item in  client_logos">
						<img :src="client_item" alt="#">
					</li>
				</ul>
			</div>
		</ESection>

		<ESection class="ss-services" padding="40px 0 10px" background-color="#eee">
			<div class="site-container">
				<h3 class="ss-title">{{ $t('featured_services') }}</h3>
				<ul class="list-featured">
					<li class="featured-item" v-for="featured_item in featureds">
						<EFeatured :name="featured_item.name" :icon="featured_item.icon_svg">{{ featured_item.content }}</EFeatured>
					</li>
				</ul>
			</div>
		</ESection>

		<ESection class="ss-product-showcase" padding="45px 0">
			<div class="site-container">
				<a-row :gutter="100" type="flex" justify="space-between" align="middle">
					<a-col :md="8" :sm="24">
						<div class="product-showcase-entry-content">
							<div class="sub-title">{{ $t('showcase_sub_text') }}</div>
							<h3>{{ $t('showcase_heading_text') }}</h3>

							<a href="#" class="button">Visit Showcase</a>
						</div>
					</a-col>
					<a-col :md="16" :sm="24">
						<div class="product-showcase-images">
							<a-carousel autoplay effect="fade">
								<div v-for="s_img in showcase_images">
									<img :src="s_img" />
								</div>
							</a-carousel>
						</div>
					</a-col>
				</a-row>
			</div>
		</ESection>

		<ESection class="ss-blog">
			<div class="site-container">
				<h3 class="ss-title">{{ $t('heading_blog_ss') }}</h3>
				<div class="featured-posts-2-cols">
					<div class="post-item" v-for="(post_item, index) in featured_posts">
						<div class="post-item-inner">
							<div class="post-thumb">
								<a :href="post_item.link">
									<img :src="post_item.thumbnail" :alt="post_item.title">
								</a>
							</div>
							<div class="post-entry">
								<h3 class="post-title"><a :href="post_item.link">{{ post_item.title }}</a></h3>
								<div class="post-excerpt" v-if="index == 0">{{ post_item.excerpt }}</div>
								<div class="post-meta" v-if="index == 0">
									<div class="author">by {{ post_item.author }}</div>
									<div class="create-date">{{ post_item.create_date }}</div>
									<div class="comment-count">Comments {{ post_item.comment_count }}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ESection>

		<ESection class="ss-testimonial" padding="60px 0" background-color="#f66b04" style="margin: 0;">
			<div class="site-container">
				<h3 class="ss-title" style="color: #FFF;">{{ $t('heading_testimonial_ss') }}</h3>
			</div>
			<div class="testimonial-carousel-content">
				<no-ssr> <!-- important to add no-ssr-->
					<OwlCarousel :items="3" :loop="true" :margin="30" :center="true" :autoplay="true" :stagePadding="100" :nav="false" :dots="false" :autoplayHoverPause="true" :responsive="owl_carouse_responsive">
						<div class="item testimonial-carousel-item" v-for="testimonial_item in testimonials">
							<div class="testimonial-item-inner">
								<div class="info">
									<div class="client-avatar">
										<img :src="testimonial_item.avatar" alt="#">
									</div>
									<div class="entry">
										<h4 class="client-name">{{ testimonial_item.name }}</h4>
										<div class="client-company">{{ `${testimonial_item.company}, ${testimonial_item.position}` }}</div>
									</div>
								</div>
								<div class="message">
									{{ testimonial_item.message }}
								</div>
								<div class="rating-star">
									{{ testimonial_item.rating }}
								</div>
							</div>
						</div>
					</OwlCarousel>
				</no-ssr>
			</div>
		</ESection>
	</div>
</template>

<script>
import ESection from '~/components/elements/e-section.vue'
import EContactform from '~/components/elements/e-contact-form.vue'
import EFeatured from '~/components/elements/e-featured.vue'

export default {
	data () {
		return {
			owl_carouse_responsive: {
				0: {
					items: 1,
					stagePadding: 30,
					margin: 10,
				},
				768: {
					items: 2,
					stagePadding: 40,
				},
				1000:{
		            items: 3,
		        }
			},
			client_logos: [
				require( '~/assets/images/envato.png' ),
				require( '~/assets/images/upwork.png' ),
				require( '~/assets/images/google.png' ),
				require( '~/assets/images/dribbble.png' ),
			],
			featureds: [
                {
                    icon_svg: '<svg viewBox="-54 -21 682 682.66669"><path d="m-1.917969 0 55.332031 576.875 231.453126 63.125 231.453124-63.125 55.332032-576.875zm458.964844 199.222656-244.824219-.003906 4.097656 44.785156h239.566407l-19.359375 250.238282-150.214844 43.691406-161.230469-50.144532v-101.480468h100.15625v30.222656l61.097657 18.878906 57.878906-18.890625 4.214844-74.925781h-221.796876l-25.039062-238.707031h355.453125zm0 0"/></svg>',
                    name: 'Front-End Coding',
                    content: 'We convert any design file: PSD, Sketch, Ai, Adobe XD to pixel perfect, semantic and standard compliant HTML/CSS template.',
                },
                {
                    icon_svg: '<svg x="0px" y="0px" viewBox="0 0 300 300" xml:space="preserve"> <g id="XMLID_21_"> <path id="XMLID_4_" d="M0.005,149.995c0,59.367,34.502,110.683,84.543,134.992L12.994,88.953 C4.674,107.607,0.005,128.25,0.005,149.995z M251.259,142.429c0-18.544-6.661-31.377-12.367-41.366 c-7.602-12.362-14.729-22.817-14.729-35.18c0-13.788,10.449-26.621,25.184-26.621c0.668,0,1.301,0.081,1.943,0.122 C224.608,14.932,189.049,0,150,0C97.597,0,51.497,26.89,24.674,67.603c3.525,0.116,6.843,0.188,9.655,0.188 c15.685,0,39.98-1.907,39.98-1.907c8.083-0.476,9.033,11.406,0.956,12.362c0,0-8.129,0.951-17.163,1.422l54.619,162.478 l32.827-98.447L122.18,79.667c-8.083-0.471-15.73-1.422-15.73-1.422c-8.083-0.48-7.138-12.838,0.95-12.362 c0,0,24.766,1.907,39.505,1.907c15.686,0,39.98-1.907,39.98-1.907c8.083-0.476,9.039,11.406,0.956,12.362 c0,0-8.138,0.951-17.162,1.422l54.203,161.238l14.962-49.984C247.45,171.427,251.259,155.266,251.259,142.429z M152.636,163.116 L107.628,293.89C121.067,297.841,135.28,300,150,300c17.471,0,34.224-3.015,49.813-8.503c-0.395-0.643-0.769-1.324-1.072-2.068 L152.636,163.116z M281.624,78.038c0.647,4.774,1.012,9.898,1.012,15.422c0,15.215-2.854,32.326-11.412,53.723l-45.812,132.459 c44.598-26,74.583-74.311,74.583-129.646C299.995,123.915,293.328,99.398,281.624,78.038z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',
                    name: 'WordPress Development',
                    content: 'We turn designs into high-quality, fully functional CMS driven websites based on WordPress.',
                },
                {
                    icon_svg: '<svg x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"> <g> <g> <path d="M257,210c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45C302,230.186,281.814,210,257,210z "/> </g> </g> <g> <g> <path d="M255,0C114.39,0,0,114.39,0,255s114.39,257,255,257s257-116.39,257-257S395.61,0,255,0z M362,330 c-20.273,0-38.152-10.161-49.017-25.596C299.23,319.971,279.354,330,257,330c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75 c16.948,0,32.426,5.865,45,15.383V195c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15c0,33.36,0,41.625,0,75 c0,16.538,13.462,30,30,30c16.538,0,30-13.462,30-30c0-100.391-66.432-150-135-150c-74.443,0-135,60.557-135,135 s60.557,135,135,135c30,0,58.374-9.609,82.061-27.803c15.822-12.078,33.94,11.765,18.281,23.789 C328.353,408.237,293.665,420,257,420c-90.981,0-165-74.019-165-165S166.019,90,257,90c82.897,0,165,61.135,165,180 C422,303.091,395.091,330,362,330z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',
                    name: 'Email Template Coding',
                    content: 'High class HTML coding for responsive email marketing templates, coming with integration into email marketing software.',
                },
                {
                    icon_svg: '<svg enable-background="new 0 0 511.333 511.333" viewBox="0 0 511.333 511.333"><path d="m505.64 161.762-64.433-136.026c-7.406-15.634-23.37-25.736-40.669-25.736h-33.938c-9.943 0-17.205 9.395-14.699 19.017l41.096 157.818c3.997 15.188 17.804 25.832 33.563 25.832h79.949c.051 0 .101 0 .151-.001 1.435-.013 2.644-1.051 2.982-2.446 3.084-12.703 1.794-26.223-4.002-38.458z"/><path d="m118.23 176.782 41.082-157.765c2.506-9.622-4.756-19.017-14.699-19.017h-33.818c-17.299 0-33.262 10.102-40.668 25.735l-64.434 136.027c-5.81 12.265-7.093 25.82-3.98 38.55.336 1.374 1.551 2.353 2.966 2.354h.026 79.949c15.758.001 29.565-10.644 33.576-25.884z"/><path d="m426.56 244.667c-18.721 0-36.189-6.803-49.722-18.324-4.548-3.872-11.185-3.883-15.721.005-13.738 11.778-31.214 18.319-49.791 18.319-18.21 0-34.948-6.387-48.116-17.029-4.449-3.596-10.76-3.596-15.209 0-13.167 10.642-29.906 17.029-48.116 17.029-18.578 0-36.056-6.542-49.794-18.321-4.536-3.889-11.174-3.878-15.722-.005-13.534 11.525-30.999 18.326-49.717 18.326h-30.045c-6.627 0-12 5.373-12 12v124.333c0 24.853 20.147 45 45 45h147v43.333h-85.163c-11.387 0-21.085 8.855-21.49 20.235-.425 11.947 9.134 21.765 20.986 21.765h212.83c11.387 0 21.085-8.855 21.49-20.235.425-11.947-9.134-21.765-20.986-21.765h-85.667v-43.333h147c24.853 0 45-20.147 45-45v-124.333c0-6.627-5.373-12-12-12z"/><path d="m199.776 202.666c19.159.059 34.831-16.204 34.831-35.363v-152.114c0-8.389-6.801-15.189-15.189-15.189-6.917 0-12.96 4.673-14.701 11.368l-38.391 147.682c-2.778 10.554-.562 21.501 6.063 30.095 6.602 8.564 16.579 13.488 27.387 13.521z"/><path d="m314.541 202.521c8.538-.772 16.566-4.739 22.347-11.07 8.112-8.885 11.031-20.883 8.016-32.341l-38.408-147.742c-1.74-6.695-7.783-11.368-14.7-11.368-8.389 0-15.189 6.8-15.189 15.189v152.758c0 20.205 17.349 36.435 37.934 34.574z"/></svg>',
                    name: 'WooCommerce Development',
                    content: 'We know the ins and outs of WooCommerce and we can help you get your eCommerce site running in a matter of weeks.',
                },
                {
                    icon_svg: '<svg enable-background="new 0 0 511.333 511.333" viewBox="0 0 511.333 511.333"><path d="m505.64 161.762-64.433-136.026c-7.406-15.634-23.37-25.736-40.669-25.736h-33.938c-9.943 0-17.205 9.395-14.699 19.017l41.096 157.818c3.997 15.188 17.804 25.832 33.563 25.832h79.949c.051 0 .101 0 .151-.001 1.435-.013 2.644-1.051 2.982-2.446 3.084-12.703 1.794-26.223-4.002-38.458z"/><path d="m118.23 176.782 41.082-157.765c2.506-9.622-4.756-19.017-14.699-19.017h-33.818c-17.299 0-33.262 10.102-40.668 25.735l-64.434 136.027c-5.81 12.265-7.093 25.82-3.98 38.55.336 1.374 1.551 2.353 2.966 2.354h.026 79.949c15.758.001 29.565-10.644 33.576-25.884z"/><path d="m426.56 244.667c-18.721 0-36.189-6.803-49.722-18.324-4.548-3.872-11.185-3.883-15.721.005-13.738 11.778-31.214 18.319-49.791 18.319-18.21 0-34.948-6.387-48.116-17.029-4.449-3.596-10.76-3.596-15.209 0-13.167 10.642-29.906 17.029-48.116 17.029-18.578 0-36.056-6.542-49.794-18.321-4.536-3.889-11.174-3.878-15.722-.005-13.534 11.525-30.999 18.326-49.717 18.326h-30.045c-6.627 0-12 5.373-12 12v124.333c0 24.853 20.147 45 45 45h147v43.333h-85.163c-11.387 0-21.085 8.855-21.49 20.235-.425 11.947 9.134 21.765 20.986 21.765h212.83c11.387 0 21.085-8.855 21.49-20.235.425-11.947-9.134-21.765-20.986-21.765h-85.667v-43.333h147c24.853 0 45-20.147 45-45v-124.333c0-6.627-5.373-12-12-12z"/><path d="m199.776 202.666c19.159.059 34.831-16.204 34.831-35.363v-152.114c0-8.389-6.801-15.189-15.189-15.189-6.917 0-12.96 4.673-14.701 11.368l-38.391 147.682c-2.778 10.554-.562 21.501 6.063 30.095 6.602 8.564 16.579 13.488 27.387 13.521z"/><path d="m314.541 202.521c8.538-.772 16.566-4.739 22.347-11.07 8.112-8.885 11.031-20.883 8.016-32.341l-38.408-147.742c-1.74-6.695-7.783-11.368-14.7-11.368-8.389 0-15.189 6.8-15.189 15.189v152.758c0 20.205 17.349 36.435 37.934 34.574z"/></svg>',
                    name: 'Shopify Development',
                    content: 'We can turn design mock-ups from any format (PSD, Ai, Sketch, Adobe XD, etc.) into a fully functional, responsive Shopify site.',
                },
                {
                    icon_svg: '<svg x="0px" y="0px" viewBox="0 0 472.615 472.615" xml:space="preserve"> <g> <g> <path d="M0,0v78.747h472.615V0H0z M285.538,49.208H49.231V29.516h236.308V49.208z M354.462,49.208h-19.692V29.516h19.692V49.208z M393.846,49.208h-19.692V29.516h19.692V49.208z M433.231,49.208h-19.692V29.516h19.692V49.208z"/> </g> </g> <g> <g> <path d="M0,98.439v374.177h472.615V98.439H0z M164.5,327.784l-13.922,13.923l-75.885-75.884l75.885-75.885l13.922,13.923 l-61.961,61.962L164.5,327.784z M196.192,387.703l-18.231-7.452l88.615-216.615l18.231,7.452L196.192,387.703z M322.038,341.708 l-13.922-13.923l61.961-61.961l-61.961-61.962l13.922-13.923l75.885,75.885L322.038,341.708z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',
                    name: 'Single page APPs',
                    content: 'Performance, Scalability, Reusable Components, One Way Data Flow - the perfect ingredients for single-page applications.',
                },
            ],
			showcase_images: [
				require( '~/assets/images/alone-ngo.jpg' ),
				require( '~/assets/images/alone-celebration.jpg' ),
			],
			featured_posts: [
				{
					thumbnail: 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
					title: 'Helpful Tips for Creating a WordPress Business Website',
					excerpt: 'When creating a website for a business, there is a seemingly endless list of things to go through and make sure you cover…',
					create_date: '16. January 2020',
					comment_count: 0,
					cats: ['Business'],
					author: 'Beplus',
					link: '#',
				},
				{
					thumbnail: 'https://images.unsplash.com/photo-1532619031801-97b02fb2de1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
					title: '2019 in review and personal New Year’s intentions',
					excerpt: 'When creating a website for a business, there is a seemingly endless list of things to go through and make sure you cover…',
					create_date: '16. January 2020',
					comment_count: 0,
					cats: ['Business'],
					author: 'Beplus',
					link: '#',
				},
				{
					thumbnail: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
					title: 'A Happy New Year 2020',
					excerpt: 'When creating a website for a business, there is a seemingly endless list of things to go through and make sure you cover…',
					create_date: '16. January 2020',
					comment_count: 0,
					cats: ['Business'],
					author: 'Beplus',
					link: '#',
				},
				{
					thumbnail: 'https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
					title: 'Celebrating the Holidays With a Big 40% Christmas Sale',
					excerpt: 'When creating a website for a business, there is a seemingly endless list of things to go through and make sure you cover…',
					create_date: '16. January 2020',
					comment_count: 0,
					cats: ['Business'],
					author: 'Beplus',
					link: '#',
				},
				{
					thumbnail: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
					title: 'Introducing the New Default WordPress Theme Twenty Twenty',
					excerpt: 'When creating a website for a business, there is a seemingly endless list of things to go through and make sure you cover…',
					create_date: '16. January 2020',
					comment_count: 0,
					cats: ['Business'],
					author: 'Beplus',
					link: '#',
				},
			],
			testimonials: [
				{
					avatar: require('~/assets/images/envato-avatar.jpg'),
					name: 'Eriya',
					rating: '⭐⭐⭐⭐⭐',
					message: 'Amazing Customer care . You guys are simply dedicated to assist even people with no Website Skills . If i could give morethan 5 stars am ready!!',
					company: 'Themeforest',
					position: 'Client',
				},
				{
					avatar: require('~/assets/images/envato-avatar.jpg'),
					name: 'Narn',
					rating: '⭐⭐⭐⭐⭐',
					message: 'Excellent customer support and a great theme. My only request would be as easier way to update the Slider Revolution and WPBakery...',
					company: 'Themeforest',
					position: 'Client',
				},
				{
					avatar: require('~/assets/images/envato-avatar.jpg'),
					name: 'Nicklas Rasmussen',
					rating: '⭐⭐⭐⭐⭐',
					message: 'I\'ve bought a lot of themes on ThemeForest in my 5+ years as a customer, but I think it\'s safe to say that the team over at Bearsthemes...',
					company: 'Themeforest',
					position: 'Client',
				},
			]
		}
	},
	components: {
		ESection,
		EContactform,
		EFeatured,
	}
}
</script>
