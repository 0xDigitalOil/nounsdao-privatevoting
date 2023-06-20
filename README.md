# nounsdao-privatevoting

Nouns DAO Private Voting is a fork of [nounsdao-monorepo](https://github.com/nounsDAO/nouns-monorepo) that integrates with the 0xDigitalOil/nounsdao-integration branch[https://github.com/Poseidon-ZKP/zkvote-contract/tree/0xDigitalOil/nouns-integration] of Poseidon's [zkvote-contract repo](https://github.com/Poseidon-ZKP/zkvote-contract/commits/main).

## Packages

### nouns-api

The [nouns api](packages/nouns-api) is an HTTP webserver that hosts token metadata. This is currently unused because on-chain, data URIs are enabled.

### nouns-assets

The [nouns assets](packages/nouns-assets) package holds the Noun PNG and run-length encoded image data.

### nouns-bots

The [nouns bots](packages/nouns-bots) package contains a bot that monitors for changes in Noun auction state and notifies everyone via Twitter and Discord.

### nouns-contracts

The [nouns contracts](packages/nouns-contracts) is the suite of Solidity contracts powering Nouns DAO.

### nouns-sdk

The [nouns sdk](packages/nouns-sdk) exposes the Nouns contract addresses, ABIs, and instances as well as image encoding and SVG building utilities.

### nouns-subgraph

In order to make retrieving more complex data from the auction history, [nouns subgraph](packages/nouns-subgraph) contains subgraph manifests that are deployed onto [The Graph](https://thegraph.com).

### nouns-webapp

The [nouns webapp](packages/nouns-webapp) is the frontend for interacting with Noun auctions as hosted at [nouns.wtf](https://nouns.wtf).

## Quickstart

Run node v16.20.0
```sh
nvm install 16.20.0
```

### Install dependencies

```sh
yarn
```

### Build all packages

```sh
yarn build
```

### Spin up hardhat chain and deploy contracts

```sh
cd packages/nouns-contracts
```
```sh
yarn task:run-local
```

### Spin up The Graph node using Docker
In new terminal:
```sh
cd packages/nouns-subgraph
```
```sh
yarn graph-node
```

### Spin up nouns subgraph instance

In new terminal:
```sh
cd packages/nouns-subgraph
```
```sh
yarh deploy:hardhat
```

### Spin up web app

```sh
cd .. && cd nouns-webapp
```
```sh
yarn start
```