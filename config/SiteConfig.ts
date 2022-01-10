export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Typescript GitBlog', // Navigation and Site Title
  siteTitleAlt: 'Typescript GitBlog - Chandula Janith', // Alternative Site title for SEO
  siteUrl: 'https://gatsby-gitblog.vercel.app', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg/4.png', // default post background header
  favicon: 'src/rounded.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Typescript GitBlog with big typography made by Chandula Janith (RedEdge967)', // Your site description
  author: 'Chandula Janith', // Author for schemaORGJSONLD
  siteLogo: '/assets/rounded.png', // Image for schemaORGJSONLD

  userGithub: 'RedEdge967',
  ogLanguage: 'en_US',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-XXXXXXX',
  POST_PER_PAGE: 4,
};
