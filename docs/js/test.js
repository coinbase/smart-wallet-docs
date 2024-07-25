const sdk = useMemo(() =>
  new CoinbaseWalletSDK({
    appName: "My App Name",
    appChainIds: [8453],
  }), []);

console.log("loaded!!!!!");

// Ensure the DOM is fully loaded before trying to access elements
document.addEventListener("DOMContentLoaded", function() {
  // Attach the event listener to the button with id 'testButton'
  document.getElementById("testButton").addEventListener(
    "click",
    () => provider.request({ method: "eth_requestAccounts" }),
  );
});
