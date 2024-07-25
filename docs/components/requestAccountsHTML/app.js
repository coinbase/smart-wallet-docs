document.addEventListener("DOMContentLoaded", function() {
  const connectButton = document.getElementById("connectButton");

  connectButton.addEventListener("click", function() {
    const provider = window.sdk.makeWeb3Provider({ options: "smartWalletOnly" });
    provider.request({ method: "eth_requestAccounts" })
      .then(accounts => console.log(accounts))
      .catch(error => console.error(error));
  });
});
