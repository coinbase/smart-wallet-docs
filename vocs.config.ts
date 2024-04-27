import { defineConfig } from 'vocs'

export default defineConfig({
  theme: {
    variables: {
      color: {
        textAccent: { light: '#2394ff', dark: '#e9e9ea' },
        backgroundDark: {light: '#ebeaee', dark: 'black'},
        background: {light: '#f6f5f8', dark: 'black'}, //f6f5f8 /ebf1f8
        heading: { light: 'black', dark: '#e9e9ea' },
        text3: { light: 'black', dark: '#e9e9ea' },
        background5: { light: '#dee8ff', dark: '#3c393f' },
      }
    }
  },
  title: 'Smart Wallet',
  topNav: [ 
    { text: 'Guide & API', link: '/docs/getting-started', match: '/docs' }, 
    { text: 'Blog', link: '/blog' }, 
    { 
      text: 'version', 
      items: [ 
        { 
          text: 'Changelog', 
          link: 'https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md', 
        }, 
        { 
          text: 'Contributing', 
          link: 'https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md', 
        }, 
      ], 
    }, 
  ], 
  sidebar: [ 
    { 
      text: 'Why Smart Wallet?', 
      link: '/why', 
    }, 
    { 
      text: 'Quick Start', 
      link: '/start', 
    }, 
    { 
      text: 'Release Plan', 
      link: '/release-plan', 
    }, 
    { 
      text: 'FAQ', 
      link: '/faq', 
    },
    { 
      text: 'Guides', 
      collapsed: false, 
      items: [ 
        { 
          text: 'Integrating via Wagmi', 
          link: '/guides/wagmi', 
        }, 
        { 
          text: 'Using Beta SDK', 
          link: '/guides/beta', 
        }, 
        { 
          text: 'Launch Ready Checklist', 
          link: '/guides/checklist', 
        },
        // {
        //   text: "wallet aggregators",
        //   link: '/docs/api/config',
        //   items: [
        //     {
        //       text: "Wallet Connect",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Portis",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Fortmatic",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Torus",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Authereum",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Arkane",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Bitski",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Squarelink",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Ledger",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "Trezor",
        //       link: '/docs/api/config',
        //     },
        //     {
        //       text: "WalletLink",
        //       link: '/docs/api/config',
        //     }
        //   ]
        // }
      ], 
    } ,
    { 
      text: 'Features', 
      collapsed: false, 
      items: [
        {
          text: "Magic Spend"
        },
        {
          text: "Batch Transactions"
        },
        {
          text: "Paymasters"
        },
      ]
    },
    { 
      text: 'SDK', 
      collapsed: false, 
      items: [ 
        { 
          text: 'Install', 
          link: '/sdk/install', 
        }, 
        { 
          text: 'Configuration', 
          link: '/sdk/config', 
        }, 
      ], 
    },
    { 
      text: 'Smart Contracts', 
      collapsed: false, 
      items: [ 
        
      ], 
    } 
  ], 
})
