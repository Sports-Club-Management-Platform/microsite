// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ClubSync",
  tagline: "Sync Your Team, Power Your Game",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sports-club-management-platform.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/microsite/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Sports-Club-Management-Platform", // Usually your GitHub org/user name.
  projectName: "microsite", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Sprints",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/Light-Mode-Logo.png",
      navbar: {
        title: "ClubSync",
        logo: {
          alt: "Sports Club Management Platform Logo",
          src: "img/Light-Mode-Logo.png",
          srcDark: "img/Dark-Mode-Logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "documentationSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Sprints", position: "left" },
          {
            to: "https://github.com/Sports-Club-Management-Platform",
            label: "GitHub",
            position: "right",
            className: "github-link",
          },
          {
            to: "https://sonarcloud.io/organizations/clubsync-es/projects",
            label: "SonarCloud",
            position: "right",
            className: "sonarcloud-link",
          },
          {
            to: "https://sports-club-management-platform.atlassian.net/jira/software/projects/SCRUM/boards/1",
            label: "Jira",
            position: "right",
            className: "jira-link",
          },
          {
            to: "https://uapt33090-my.sharepoint.com/:f:/g/personal/andreaoliveira_ua_pt/EhW0G5_JZZtBqegbRjKbBJ4BN15x2xUjN-kHasX7VICpAw?e=iwcXV4",
            label: "OneDrive",
            position: "right",
            className: "drive-link",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} , Engenharia de Software Project`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
