<p align="center">
    <br />
    <a href="https://withpaper.com"><img src="./assets/paper-logo.svg" width="100" alt=""/></a>
    <br />
</p>
<h1 align="center">Paper Embedded Wallet Service SDK</h1>
<p align="center">
    <a href="https://www.npmjs.com/package/@paperxyz/embedded-wallet-service-sdk"><img src="https://img.shields.io/npm/v/@paperxyz/embedded-wallet-service-sdk" alt="npm version"/></a>
    <a href="https://discord.gg/mnUa29J2Fp"><img alt="Join our Discord!" src="https://img.shields.io/discord/936354866358546453.svg?color=7289da&label=discord&logo=discord&style=flat"/></a>
</p>

[Paper](https://withpaper.com) is a developer platform for NFT commerce that
easily onboards users without a wallet or cryptocurrency.

## [Documentation](https://docs.withpaper.com/reference/embedded-wallet-service-overview)

## Installation

Install this SDK:

```shell
npm install @paperxyz/embedded-wallet-service-sdk
yarn add @paperxyz/embedded-wallet-service-sdk
pnpm add @paperxyz/embedded-wallet-service-sdk
```

Then get started right away:

```js
import { PaperEmbeddedWalletSdk } from "@paperxyz/embedded-wallet-service-sdk";

// initialize the SDK
const Paper = new PaperEmbeddedWalletSdk({
  clientId: "YOUR_CLIENT_ID",
  chain: "Mumbai",
});

// log the user in
const user = await Paper.auth.loginWithPaperModal();

// Execute a transaction without the user wallet needing gas money
const { transactionHash } = await user.wallet.gasless.callContract({
  methodInterface: "function mintFreeNft(uint256 quantity) external",
  methodArgs: [1],
  contractAddress: "0x...",
});
```

## Contributing

Please review our [guidelines](CONTRIBUTING.md) for more details.
