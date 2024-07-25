const requestAccountsApp = `import {sdk} from "./config";

export default function App() {
  const provider = sdk.makeWeb3Provider({ options: "smartWalletOnly" });
  return (
    <button
      onClick={() => provider.request({ method: "eth_requestAccounts" })}
    >
      Connect
    </button>
  );
}`;

export default requestAccountsApp;
