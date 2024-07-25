const config = `import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

export const sdk = new CoinbaseWalletSDK({
  appName: "My App Name",
  appChainIds: [8453],
})`;

export default config;
