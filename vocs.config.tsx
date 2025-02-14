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
        { text: "Install for Web", link: "/introduction/install-web" },
        { text: "Install for React Native", link: "/introduction/install-react-native" },
        { text: "Recommend Libraries", link: "/introduction/recommended-libraries" },
        { text: "Starter Templates", link: "/introduction/templates" },
        { text: "Base Gasless Campaign", link: "/introduction/base-gasless-campaign" },
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
            { text: "MagicSpend", link: "/features/MagicSpend" },
          ],
        },
        {
          text: "Optional Features",
          items: [
            { text: "Gas-free Transactions", link: "/features/gas-free-transactions" },
            { text: "Spend Permissions", link: "/features/spend-permissions" },
            { text: "Batch Transactions", link: "/features/batch-operations" },
            { text: "Custom Gas Tokens", link: "/features/custom-gas-tokens" },
          ],
        },
      ],
    },
    {
      text: "Usage Details",
      items: [
        { text: "Signature Verification", link: "/usage-details/signature-verification" },
        { text: "Popups", link: "/usage-details/popups" },
        { text: "Simulations", link: "/usage-details/Simulations" },
        { text: "Gas Usage", link: "/usage-details/gas-usage" },
        { text: "Self Calls", link: "/usage-details/self-calls" },
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
