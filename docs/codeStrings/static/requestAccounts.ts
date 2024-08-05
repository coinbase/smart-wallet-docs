export const requestAccountsHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connect to Coinbase Wallet</title>
  <script src="app.js" type="module"></script>
</head>
<body>
  <div id="app">
    <button id="connectButton">Connect</button>
    <p id="connectedAddress" style="display: none;">Connected address: <span id="address"></span></p>
  </div>
</body>
</html>`;

export const requestAccountsJS = `import CoinbaseWalletSDK from 'https://esm.sh/@coinbase/wallet-sdk';

document.addEventListener('DOMContentLoaded', () => {
  const baseSepoliaChainId = 84532;

  const coinbaseWallet = new CoinbaseWalletSDK({
    appName: "My App Name",
    appChainIds: [baseSepoliaChainId] // Replace with your chain IDs if needed
  });

  const provider = coinbaseWallet.makeWeb3Provider({ options: "smartWalletOnly" });

  const connectButton = document.getElementById('connectButton');
  const connectedAddressParagraph = document.getElementById('connectedAddress');
  const addressSpan = document.getElementById('address');

  // Event listener for the connect button
  connectButton.addEventListener('click', async () => {
    try {
      // Request accounts from the provider
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        // Update the UI to show the connected address
        addressSpan.textContent = accounts[0];
        connectedAddressParagraph.style.display = 'block';
        connectButton.style.display = 'none';
      }
    } catch (error) {
      console.error('Error connecting to Coinbase Wallet:', error);
    }
  });
});
`;
