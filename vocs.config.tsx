import { defineConfig, SidebarItem } from "vocs";

export default defineConfig({
  head() {
    return (
      <script
        defer
        src={process.env.VERCEL_ENV == "production"
          ? "/_vercel/insights/script.js"
          : ""}
      >
      </script>
    );
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
    {
      text: "SDK Playground",
      link: "https://coinbase.github.io/coinbase-wallet-sdk/",
    },
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
      text: "Base Gasless Campaign",
      link: "/base-gasless-campaign",
    },
    {
      text: "Features",
      collapsed: false,
      items: [
        {
          text: "Networks",
          link: "/features/networks",
        },
      ],
    },
    {
      text: "Guides",
      collapsed: false,
      items: [
        {
          text: "Create a New Web App",
          items: [
            {
              text: "Using Onchain App Template",
              link: "/guides/create-app/using-onchain-app-template",
            },
            {
              text: "Using Wagmi Template",
              link: "/guides/create-app/using-wagmi",
            },
          ],
        },
        {
          text: "Update an Existing Web App",
          link: "/guides/update-existing-app",
        },
        {
          text: "Integrate with a React Native App",
          link: "/guides/react-native-integration",
        },
        {
          text: "Create Wallet Button",
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
          text: "Batch Transactions",
          link: "/guides/batch-transactions",
        },
        {
          text: "Spend Permissions",
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/guides/spend-permissions/overview",
            },
            {
              text: "Quick Start",
              link: "/guides/spend-permissions/quick-start",
            },
            {
              text: "API Reference",
              items: [
                {
                  text: "SpendPermissionManager Contract",
                  link: "/guides/spend-permissions/api-reference/spendpermissionmanager",
                },
                {
                  text: "coinbase_fetchPermissions",
                  link: "/guides/spend-permissions/api-reference/coinbase-fetchpermissions",
                },
                {
                  text: "Client Resources",
                  link: "/guides/spend-permissions/api-reference/client-resources",
                },
              ],
            },
          ],
        },
        {
          text: "Paymasters (Sponsored Transactions)",
          link: "/guides/paymasters",
        },
        {
          text: "Token Paymasters (Gas Tokens)",
          link: "/guides/erc20-paymasters",
        },
        {
          text: "MagicSpend Support",
          link: "/guides/magic-spend",
        },
        {
          text: "Tips & Tricks",
          items: [
            {
              text: "Inspect Transaction Simulation",
              link: "/guides/tips/inspect-txn-simulation",
            },
            {
              text: "Popup Tips",
              link: "/guides/tips/popup-tips",
            },
          ],
        },
      ],
    },
    {
      text: "SDK",
      collapsed: false,
      items: [
        {
          text: "Getting Started (v4.2.0+)",
          link: "/sdk/getting-started",
          items: [
            {
              text: "createCoinbaseWalletSDK",
              link: "/sdk/create-coinbase-wallet-sdk",
            },
          ],
        },
        {
          text: "Legacy Setup",
          link: "/sdk/legacy-setup",
          items: [
            {
              text: "makeWeb3Provider",
              link: "/sdk/make-web3-provider",
            },
          ],
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
        {
          text: "Smart Wallet",
          link: "https://github.com/coinbase/smart-wallet",
        },
        {
          text: "Spend Permissions",
          link: "https://github.com/coinbase/spend-permissions",
        },
        {
          text: "MagicSpend",
          link: "https://github.com/coinbase/magic-spend",
        },
      ],
    },
    {
      text: "FAQ",
      collapsed: false,
      items: [
        {
          text: "Why does it cost more on Ethereum L1?",
          link: "/faq/why-does-it-cost-more-on-ethereum-l1",
        },
      ],
    },
  ] as SidebarItem[],
});
