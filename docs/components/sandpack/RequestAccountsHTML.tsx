import { Sandpack } from "@codesandbox/sandpack-react";
import { staticRequestAccounts, staticRequestAccountsScript } from "../../../generated/sandpackFiles";

export default function RequestAccountsHTML() {
  return (
    <Sandpack
      template="static"
      files={{
        "index.html": staticRequestAccounts,
        "app.js": staticRequestAccountsScript,
      }}
    />
  );
}
