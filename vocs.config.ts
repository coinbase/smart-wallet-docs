import { defineConfig } from 'vocs'

export default defineConfig({
  theme: {
    colorScheme: 'system',
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
      text: 'Getting started', 
      link: '/start', 
    }, 
    { 
      text: 'FAQ', 
      link: '/faq', 
    },
    { 
      text: 'Launch Ready Checklist', 
      link: '/checklist', 
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
          text: 'Batch transactions', 
          link: '/guides/batch', 
        }, 
        { 
          text: 'Paymasters (sponsored transactions)', 
          link: '/guides/paymaster', 
        }, 
        { 
          text: 'Magic Spend support', 
          link: '/guides/magic-spend', 
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
      text: 'SDK', 
      collapsed: false, 
      items: [ 
        { 
          text: 'Install', 
          link: '/sdk/install', 
        }, 
        { 
          text: 'Setup', 
          link: '/sdk/setup', 
        }, 
        {
          text: 'makeWeb3Provider',
          link: '/sdk/makeWeb3Provider'
        }
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
