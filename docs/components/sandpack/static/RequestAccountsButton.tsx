"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { requestAccountsHTML, requestAccountsJS } from "../../../codeStrings/static/requestAccounts";

export default function RequestAccountsHTML() {
  return (
    <Sandpack
      template="static"
      files={{
        "/index.html": requestAccountsHTML,
        "app.js": requestAccountsJS,
      }}
    />
  );
}
