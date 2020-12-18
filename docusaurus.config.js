module.exports = {
  title: 'XMiY',
  tagline: `mlcheng's blog`,
  url: 'mlcheng-blog.vercel.app',
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
        {
          to: 'blog',
          label: '博客',
          position: 'right'
        },
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left'
        // },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/MingLiCheng/mlcheng-blog',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/'
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus'
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus'
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog'
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus'
      //       }
      //     ]
      //   }
      // ],
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
  themes: ["@docusaurus/theme-live-codeblock"],
}
