// [!region imports]
import { useEffect, useState } from "react";
import { WalletCapabilities } from "viem";
import { useEIP5792WalletClient } from "./useEIP5792WalletClient";
// [!endregion imports]

export function useWalletCapabilities({ chainId }: { chainId?: number }) {
  const walletClient = useEIP5792WalletClient();
  const [capabilities, setCapabilities] = useState<{
    [chainId: number]: WalletCapabilities;
  }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (walletClient) {
      void (async () => {
        try {
          const capabilities = await walletClient.getCapabilities();
          setCapabilities(capabilities);
          setLoading(false);
        } catch {
          // handle wallets that don't support this RPC
          setLoading(false);
          setCapabilities({});
        }
      })();
    }
  }, [walletClient]);

  return {
    capabilities: capabilities && chainId ? capabilities[chainId] : capabilities,
    loading,
  };
}
