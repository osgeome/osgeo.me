import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OSGeo Middle East',
  tagline: 'OSGeo الشرق الأوسط (Open Source Geospatial) هو مجتمع جديد مكرس لتقنيات الجغرافيا المكانية مفتوحة المصدر في منطقة الشرق الأوسط. هدفنا هو توحيد المطورين، ومتخصصي نظم المعلومات الجغرافية، وعلماء البيانات، والطلاب، وأي شخص مهتم بالخرائط والبيانات المكانية لتبادل الأفكار وإنشاء أدوات مفيدة. في فعالياتنا، يمكنك المشاركة في ورش العمل، والمحاضرات من الخبراء، والمشاريع، ومسابقات البرمجة، بالإضافة إلى بناء شبكة علاقات والتعاون مع الآخرين. انضم إلى OSGeo الشرق الأوسط لتتواصل، وتتعلم، وتساهم في بناء مجتمع جغرافي مكاني قوي في المنطقة!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://osgeo.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'osgeome', // Usually your GitHub org/user name.
  projectName: 'osgeo.me', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osgeome/osgeo.me/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osgeome/osgeo.me/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'OSGeo Middle East Logo',
        src: 'img/osgeo-me-logo-cmyk.svg',
        height: 100,
        // width: 100,
        style: {
          height: '48px',
        },

      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'تعًلم',
        },
        { to: '/blog', label: 'المدونة', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/osgeome',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'وثائق',
          items: [
            {
              label: 'تعلم',
              to: '/docs/About-OSGeo-Middle-East',
            },
          ],
        },
        {
          title: 'مجتمعنا',
          items: [
            {
              label: 'ديسكورد',
              href: 'https://discord.gg/QTvXu4Yb8g',
            },
          ],
        },
        {
          title: 'المزيد',
          items: [
            {
              label: 'المدونة',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/osgeome',
            },
          ],
        },
      ],
      copyright: `جميع الحقوق محفوظة © ${new Date().getFullYear()} OSGeo.me`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
