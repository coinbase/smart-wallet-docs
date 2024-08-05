import { Sandpack } from "@codesandbox/sandpack-react";
import { reactConfig, reactRequestAccounts } from "../../../generated/sandpackFiles";

export default function RequestAccountsReact() {
  return (
    <Sandpack
      template="react"
      customSetup={{
        dependencies: {
          "@coinbase/wallet-sdk": "latest",
        },
      }}
      files={{
        "App.js": reactRequestAccounts,
        "config.js": reactConfig,
      }}
    />
  );
}
