const config = `import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const baseSepoliaChainId = 84532;

export const sdk = new CoinbaseWalletSDK({
  appName: "My App Name",
  appChainIds: [baseSepoliaChainId],
})`;

export default config;
