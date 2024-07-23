import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk'

export const sdk = new CoinbaseWalletSDK({
  appName: 'My App Name',
  appChainIds: [8453]
});

export default function RequestAccountsButton() {
  const provider = sdk.makeWeb3Provider({options: 'smartWalletOnly'});
  return(
    <button
    onClick={() => provider.request({method: 'eth_requestAccounts'})}
    > test </button>
  )
}
