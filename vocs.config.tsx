import { defineConfig } from "vocs";

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
      text: "Introduction",
      items: [
        { text: "Install for Web", link: "/install-web" },
        { text: "Install for React Native", link: "/install-react-native" },
        { text: "Recommend Libraries", link: "/recommended-libraries" },
        { text: "Starter Templates", link: "/starter-templates" },
      ],
    },

    {
      text: "Features",
      items: [
        {
          text: "Built-in Features",
          items: [
            { text: "Single Sign On", link: "/features/single-sign-on" },
            { text: "Networks", link: "/features/networks" },
            { text: "Passkeys", link: "/features/passkeys" },
            { text: "Recovery", link: "/features/recovery-keys" },
            { text: "MagicSpend", link: "/features/magic-spend" },
          ],
        },
        {
          text: "Optional Features",
          items: [
            { text: "Gas-free Transactions", link: "/features/sponsored-transactions" },
            { text: "One-click Transactions", link: "/features/spend-permissions" },
            { text: "Batch Transactions", link: "/features/batch-operations" },
            { text: "Custom Gas Tokens", link: "/features/custom-gas-tokens" },
          ],
        },
      ],
    },
    {
      text: "Important Details",
      items: [
        { text: "Signature Verification", link: "/differences/signature-verification" },
        { text: "Popups", link: "/differences/popups" },
        { text: "Simulations", link: "/differences/Simulations" },
        { text: "Portability", link: "/differences/portability" },
        { text: "Gas Usage", link: "/differences/gas-usage" },
        { text: "Self Calls", link: "/differences/self-calls" },
      ],
    },
    {
      text: "SDK",
      collapsed: false,
      items: [
        {
          text: "createCoinbaseWalletSDK",
          link: "/sdk/create-coinbase-wallet-sdk",
        },
      ],
    },
  ],
});
