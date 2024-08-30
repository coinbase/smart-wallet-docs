// vocs.config.tsx
import { jsx } from "file:///Users/connerswenberg/Code/base/smart-wallet-docs/node_modules/react/jsx-runtime.js";
import { defineConfig } from "file:///Users/connerswenberg/Code/base/smart-wallet-docs/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  head() {
    return /* @__PURE__ */ jsx("script", {
      defer: true,
      src: process.env.VERCEL_ENV == "production" ? "/_vercel/insights/script.js" : "",
    });
  },
  theme: {
    colorScheme: "system",
    variables: {
      color: {
        textAccent: { light: "#2394ff", dark: "#e9e9ea" },
        backgroundDark: { light: "#ebeaee", dark: "black" },
        background: { light: "#f6f5f8", dark: "black" },
        // f6f5f8 /ebf1f8
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
      text: "Base Gasless Campaign",
      link: "/base-gasless-campaign",
    },
    {
      text: "Guides",
      collapsed: false,
      items: [
        {
          text: "Create a New App",
          items: [
            { text: "Using Build Onchain Template", link: "/guides/create-app/using-boat" },
            { text: "Using Wagmi Template", link: "/guides/create-app/using-wagmi" },
          ],
        },
        {
          text: "Update an Existing App",
          link: "/guides/update-existing-app",
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
          text: "Paymasters (Sponsored Transactions)",
          link: "/guides/paymasters",
        },
        {
          text: "Magic Spend Support",
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
export { vocs_config_default as default };
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBoZWFkKCkge1xuICAgIHJldHVybiA8c2NyaXB0IGRlZmVyIHNyYz17cHJvY2Vzcy5lbnYuVkVSQ0VMX0VOViA9PSBcInByb2R1Y3Rpb25cIiA/IFwiL192ZXJjZWwvaW5zaWdodHMvc2NyaXB0LmpzXCIgOiBcIlwifT48L3NjcmlwdD47XG4gIH0sXG4gIHRoZW1lOiB7XG4gICAgY29sb3JTY2hlbWU6IFwic3lzdGVtXCIsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICB0ZXh0QWNjZW50OiB7IGxpZ2h0OiBcIiMyMzk0ZmZcIiwgZGFyazogXCIjZTllOWVhXCIgfSxcbiAgICAgICAgYmFja2dyb3VuZERhcms6IHsgbGlnaHQ6IFwiI2ViZWFlZVwiLCBkYXJrOiBcImJsYWNrXCIgfSxcbiAgICAgICAgYmFja2dyb3VuZDogeyBsaWdodDogXCIjZjZmNWY4XCIsIGRhcms6IFwiYmxhY2tcIiB9LCAvLyBmNmY1ZjggL2ViZjFmOFxuICAgICAgICBoZWFkaW5nOiB7IGxpZ2h0OiBcImJsYWNrXCIsIGRhcms6IFwiI2U5ZTllYVwiIH0sXG4gICAgICAgIHRleHQzOiB7IGxpZ2h0OiBcImJsYWNrXCIsIGRhcms6IFwiI2U5ZTllYVwiIH0sXG4gICAgICAgIGJhY2tncm91bmQ1OiB7IGxpZ2h0OiBcIiNkZWU4ZmZcIiwgZGFyazogXCIjM2MzOTNmXCIgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgb2dJbWFnZVVybDogXCJodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb25cIixcbiAgdGl0bGU6IFwiU21hcnQgV2FsbGV0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIlNtYXJ0IFdhbGxldCBEb2N1bWVudGF0aW9uXCIsXG4gIC8vIGxvZ29Vcmw6ICcvbG9nby5zdmcnLFxuICBpY29uVXJsOiBcIi9sb2dvLnN2Z1wiLFxuICB0b3BOYXY6IFtcbiAgICB7IHRleHQ6IFwiRGVtb1wiLCBsaW5rOiBcImh0dHBzOi8vc21hcnQtd2FsbGV0Lnh5ei9cIiB9LFxuICAgIHsgdGV4dDogXCJTREsgUGxheWdyb3VuZFwiLCBsaW5rOiBcImh0dHBzOi8vY29pbmJhc2UuZ2l0aHViLmlvL2NvaW5iYXNlLXdhbGxldC1zZGsvXCIgfSxcbiAgICB7IHRleHQ6IFwiR2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvaW5iYXNlL2NvaW5iYXNlLXdhbGxldC1zZGtcIiB9LFxuICAgIHsgdGV4dDogXCJEaXNjb3JkXCIsIGxpbms6IFwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9pbnZpdGUvY2RwL1wiIH0sXG4gIF0sXG4gIHNpZGViYXI6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIldoeSBTbWFydCBXYWxsZXQ/XCIsXG4gICAgICBsaW5rOiBcIi93aHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUXVpY2sgU3RhcnRcIixcbiAgICAgIGxpbms6IFwiL3F1aWNrLXN0YXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkZBUVwiLFxuICAgICAgbGluazogXCIvRkFRXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkxhdW5jaCBSZWFkeSBDaGVja2xpc3RcIixcbiAgICAgIGxpbms6IFwiL2NoZWNrbGlzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJXYWxsZXQgTGlicmFyeSBTdXBwb3J0XCIsXG4gICAgICBsaW5rOiBcIi93YWxsZXQtbGlicmFyeS1zdXBwb3J0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkJhc2UgR2FzbGVzcyBDYW1wYWlnblwiLFxuICAgICAgbGluazogXCIvYmFzZS1nYXNsZXNzLWNhbXBhaWduXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkd1aWRlc1wiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNyZWF0ZSBhIE5ldyBBcHBcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiBcIlVzaW5nIEJ1aWxkIE9uY2hhaW4gVGVtcGxhdGVcIiwgbGluazogXCIvZ3VpZGVzL2NyZWF0ZS1hcHAvdXNpbmctYm9hdFwiIH0sXG4gICAgICAgICAgICB7IHRleHQ6IFwiVXNpbmcgV2FnbWkgVGVtcGxhdGVcIiwgbGluazogXCIvZ3VpZGVzL2NyZWF0ZS1hcHAvdXNpbmctd2FnbWlcIiB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlVwZGF0ZSBhbiBFeGlzdGluZyBBcHBcIixcbiAgICAgICAgICBsaW5rOiBcIi9ndWlkZXMvdXBkYXRlLWV4aXN0aW5nLWFwcFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJDcmVhdGUgV2FsbGV0IEJ1dHRvblwiLFxuICAgICAgICAgIGxpbms6IFwiL2d1aWRlcy9jb21wb25lbnRzL2NyZWF0ZS13YWxsZXQtYnV0dG9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlNpZ25hdHVyZSBWZXJpZmljYXRpb25cIixcbiAgICAgICAgICBsaW5rOiBcIi9ndWlkZXMvc2lnbmF0dXJlLXZlcmlmaWNhdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTaWduLUluIHdpdGggRXRoZXJldW1cIixcbiAgICAgICAgICBsaW5rOiBcIi9ndWlkZXMvc2l3ZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJCYXRjaCBUcmFuc2FjdGlvbnNcIixcbiAgICAgICAgICBsaW5rOiBcIi9ndWlkZXMvYmF0Y2gtdHJhbnNhY3Rpb25zXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlBheW1hc3RlcnMgKFNwb25zb3JlZCBUcmFuc2FjdGlvbnMpXCIsXG4gICAgICAgICAgbGluazogXCIvZ3VpZGVzL3BheW1hc3RlcnNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiTWFnaWMgU3BlbmQgU3VwcG9ydFwiLFxuICAgICAgICAgIGxpbms6IFwiL2d1aWRlcy9tYWdpYy1zcGVuZFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJUaXBzICYgVHJpY2tzXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJJbnNwZWN0IFRyYW5zYWN0aW9uIFNpbXVsYXRpb25cIixcbiAgICAgICAgICAgICAgbGluazogXCIvZ3VpZGVzL3RpcHMvaW5zcGVjdC10eG4tc2ltdWxhdGlvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJQb3B1cCBUaXBzXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2d1aWRlcy90aXBzL3BvcHVwLXRpcHNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlNES1wiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkluc3RhbGxcIixcbiAgICAgICAgICBsaW5rOiBcIi9zZGsvaW5zdGFsbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTZXR1cFwiLFxuICAgICAgICAgIGxpbms6IFwiL3Nkay9zZXR1cFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJtYWtlV2ViM1Byb3ZpZGVyXCIsXG4gICAgICAgICAgbGluazogXCIvc2RrL21ha2VXZWIzUHJvdmlkZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiVXBncmFkaW5nIGZyb20gMy54XCIsXG4gICAgICAgICAgbGluazogXCIvc2RrL3YzLXRvLXY0LWNoYW5nZXNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlNtYXJ0IENvbnRyYWN0c1wiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJTbWFydCBXYWxsZXRcIiwgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vY29pbmJhc2Uvc21hcnQtd2FsbGV0XCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIk1hZ2ljIFNwZW5kXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvaW5iYXNlL21hZ2ljLXNwZW5kXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsb0JBQW9CO0FBSWxCO0FBRlgsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUNMLFdBQU8sb0JBQUMsWUFBTyxPQUFLLE1BQUMsS0FBSyxRQUFRLElBQUksY0FBYyxlQUFlLGdDQUFnQyxJQUFJO0FBQUEsRUFDekc7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxNQUNULE9BQU87QUFBQSxRQUNMLFlBQVksRUFBRSxPQUFPLFdBQVcsTUFBTSxVQUFVO0FBQUEsUUFDaEQsZ0JBQWdCLEVBQUUsT0FBTyxXQUFXLE1BQU0sUUFBUTtBQUFBLFFBQ2xELFlBQVksRUFBRSxPQUFPLFdBQVcsTUFBTSxRQUFRO0FBQUE7QUFB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
