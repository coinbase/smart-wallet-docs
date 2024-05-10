import { defineConfig } from "vocs";

export default defineConfig({
  head() {
    return <script defer src={process.env.VERCEL_ENV == "production" ? "/_vercel/insights/script.js" : ""}></script>;
  },
  theme: {
    colorScheme: "system",
    variables: {
      color: {
        textAccent: { light: "#2394ff", dark: "#e9e9ea" },
        backgroundDark: { light: "#ebeaee", dark: "black" },
        background: { light: "#f6f5f8", dark: "black" }, // f6f5f8 /ebf1f8
        heading: { light: "black", dark: "#e9e9ea" },
        text3: { light: "black", dark: "#e9e9ea" },
        background5: { light: "#dee8ff", dark: "#3c393f" },
      },
    },
  },
  ogImageUrl: "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  title: "Smart Wallet",
  description: "Smart Wallet Documentation",
  // logoUrl: '/logo.svg',
  iconUrl: "/logo.svg",
  topNav: [
    { text: "Demo", link: "https://smart-wallet.xyz/" },
    { text: "SDK Playground", link: "https://coinbase.github.io/coinbase-wallet-sdk/" },
    { text: "Github", link: "https://github.com/coinbase/coinbase-wallet-sdk" },
    { text: "Discord", link: "https://discord.com/invite/cdp/" },
  ],
  sidebar: [
    {
      text: "Why Smart Wallet?",
      link: "/why",
    },
    {
      text: "Quick Start",
      link: "/quick-start",
    },
    {
      text: "FAQ",
      link: "/FAQ",
    },
    {
      text: "Launch Ready Checklist",
      link: "/checklist",
    },
    {
      text: "Wallet Library Support",
      link: "/wallet-library-support",
    },
    {
      text: "Guides",
      collapsed: false,
      items: [
        {
          text: "Create a new app",
          items: [
            { text: "Using Build Onchain Template", link: "/guides/create-app/using-boat" },
            { text: "Using Wagmi Template", link: "/guides/create-app/using-wagmi" },
          ],
        },
        {
          text: "Update an existing app",
          link: "/guides/update-existing-app",
        },
        {
          text: "Create Wallet button",
          link: "/guides/components/create-wallet-button",
        },
        {
          text: "Signature Verification",
          link: "/guides/signature-verification",
        },
        {
          text: "Sign-In with Ethereum",
          link: "/guides/siwe",
        },
        {
          text: "Batch transactions",
          link: "/guides/batch-transactions",
        },
        {
          text: "Paymasters (sponsored transactions)",
          link: "/guides/paymasters",
        },
        {
          text: "Magic Spend support",
          link: "/guides/magic-spend",
        },
      ],
    },
    {
      text: "SDK",
      collapsed: false,
      items: [
        {
          text: "Install",
          link: "/sdk/install",
        },
        {
          text: "Setup",
          link: "/sdk/setup",
        },
        {
          text: "makeWeb3Provider",
          link: "/sdk/makeWeb3Provider",
        },
        {
          text: "Upgrading from 3.x",
          link: "/sdk/v3-to-v4-changes",
        },
      ],
    },
    {
      text: "Smart Contracts",
      collapsed: false,
      items: [
        { text: "Smart Wallet", link: "https://github.com/coinbase/smart-wallet" },
        { text: "Magic Spend", link: "https://github.com/coinbase/magic-spend" },
      ],
    },
  ],
});
