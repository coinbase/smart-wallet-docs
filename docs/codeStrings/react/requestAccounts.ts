const requestAccountsApp = `import {sdk} from "./config";
import {useState} from "react";

export default function App() {
  const [address, setAddress] = useState(undefined);
  const provider = sdk.makeWeb3Provider({ options: "smartWalletOnly" });

  const handleClick = async () => {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    setAddress(accounts[0]);
  }

  return (
  <>
    {!address && <button
      onClick={handleClick}
    >
      Connect
    </button>}
    {address && <p>Connected address: {address}</p>}
  </>
  );
}`;

export default requestAccountsApp;
