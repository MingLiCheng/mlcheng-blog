module.exports = {
  title: 'XMiY',
  tagline: `mlcheng's blog`,
  url: 'https://mlcheng-blog.vercel.app/',
  baseUrl: '/',
  // onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mlcheng', // Usually your GitHub org/user name.
  projectName: 'mlcheng-blog', // Usually your repo name.
  stylesheets: ['https://fonts.font.im/css?family=Raleway:500,700'],
  themeConfig: {
    navbar: {
      title: '前端开发工程师',
      logo: {
        alt: '前端开发工程师',
        src: 'img/logo.png'
      },
      items: [
        // {
        //   to: '/'
        // },
        {
          to: 'blog',
          label: '博客',
          position: 'right'
        },
        {
          href: 'https://github.com/MingLiCheng/mlcheng-blog',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themes: ['@docusaurus/theme-live-codeblock']
}
