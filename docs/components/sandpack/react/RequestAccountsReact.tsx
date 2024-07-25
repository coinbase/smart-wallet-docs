"use client";
import { Sandpack } from "@codesandbox/sandpack-react";

import config from "../../../codeStrings/react/config";
import requestAccountsApp from "../../../codeStrings/react/requestAccounts";

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
        "/App.js": requestAccountsApp,
        "/config.js": config,
      }}
    />
  );
}
