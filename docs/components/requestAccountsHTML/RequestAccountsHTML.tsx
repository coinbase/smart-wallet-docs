"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

export default function RequestAccountsHTML() {
  return (
    <Sandpack
      template="static"
      files={{
        "/index.html": `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connect to Coinbase Wallet</title>
  <script src="https://unpkg.com/@coinbase/wallet-sdk@latest/dist/coinbasewallet-sdk.min.js"></script>
</head>
<body>
  <button id="connectButton">Connect</button>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize the Coinbase Wallet SDK
      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: "My App Name",
        appChainIds: [8453] // Replace with your chain IDs if needed
      });

      // Create a Web3 provider
      const provider = coinbaseWallet.makeWeb3Provider();

      // Get the button element
      const connectButton = document.getElementById('connectButton');

      // Add an event listener to the button
      connectButton.addEventListener('click', async () => {
        try {
          // Request accounts from the provider
          const accounts = await provider.request({ method: 'eth_requestAccounts' });
          console.log('Connected accounts:', accounts);
        } catch (error) {
          console.error('Error connecting to Coinbase Wallet:', error);
        }
      });
    });
  </script>
</body>
</html>`,
      }}
      theme={amethyst}
    />
  );
}
