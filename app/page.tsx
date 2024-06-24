"use client";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

export default function Home() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "03e4b391-ad82-473b-b46c-59f38b2ea6bf",
        walletConnectors: [
          EthereumWalletConnectors,
          ZeroDevSmartWalletConnectors,
        ],
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  );
}
