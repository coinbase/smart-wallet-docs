"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

import config from "../codeStrings/config";
import requestAccountsApp from "../codeStrings/requestAccounts";

export default function RequestAccountsButton() {
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
      theme={amethyst}
    />
  );
}
