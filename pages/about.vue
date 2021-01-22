<template>
  <div>
    <div class="about-page-container site-container">
      <div class="space-medium"></div>
      <h1 v-html="welcome_text"></h1>
      <br />
      <p v-html="intro_text"></p>
      <div class="space-medium"></div>
      <img class="image" :src="intro_image" alt="#" />
      <div class="space-medium"></div>
      <a-row :gutter="16">
        <a-col :span=8>
          
        </a-col>
        <a-col :span=12>
          <p v-html="long_text"></p>
        </a-col>
        <a-col :span=4>
          
        </a-col>
      </a-row>
      <div class="space-medium"></div>
    </div>

    <ESection class="ss-services" padding="40px 0 10px" background-color="#eee" style="margin: 0;">
      <div class="site-container">
        <h3 class="ss-title">{{ $t('featured_services') }}</h3>
        <ul class="list-featured">
          <li class="featured-item" v-for="(featured_item, index) in featureds" :key="index">
            <EFeatured :name="featured_item.name" :icon="featured_item.icon_svg">{{ featured_item.content }}</EFeatured>
          </li>
        </ul>
      </div>
    </ESection>
  </div>
</template>

<script>
import ESection from '~/components/elements/e-section.vue'
import EFeatured from '~/components/elements/e-featured.vue' 

export default {
  components: { ESection, EFeatured },
  data: () => {
    return {
      welcome_text: 'Hi there! Who we are & what we do 🌵',
      intro_text: 'Below you will find the team, <br />our value and more.',
      intro_image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80',
      long_text: `
      <h2>Beplus Founded in 2016,</h2>
      <p>Our specialized team of designers, developers and project managers work with streamlined processes to break through organizational roadblocks. We translate research into solutions, crafting thoughtful and unified brands, apps, websites, interfaces and systems. Through challenging core assumptions, we shape the products and services that improve the lives of thousands every single day.</p>
      <p>Like the world around us and the businesses we work with, our design practice is always moving and improving. We’re always striving to see a different way and find a better path.</p>
      <p>We pride ourselves on our ability to challenge core assumptions, unpick legacy behaviors, streamline complex processes, and strike a balance between great design and functional development.</p>`,
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
    }
  }
}
</script> 