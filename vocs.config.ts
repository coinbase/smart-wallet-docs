import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
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
