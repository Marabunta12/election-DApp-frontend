# Decentralized election aplication built on Ethereum blockchain


## This project is an Ethereum-based application which allows to hold an election. Smart contract is written in Solidity, front-end is built with Next.js framework and uses The Graph to read data from the blockchain. Here are the main features of this app:

* The contract sets deployer as an election admin.
* Election admin control election process. He can add voters, candidates, start and stop election.
* Only authorised voters have right to vote.
* Election admin control when election is open.

## This Dapp goal is to allow some centralized entity to hold en election with easily verifiable results. Thanks to blockchain technology any attems of fraud are impossible.

## This repository contains only frontend code. For smart contract and subgraph code see links below

* ### [Election smart contract code](https://github.com/Marabunta12/election-DApp)
* ### [Subgraph code](https://github.com/Marabunta12/election-dapp-graph)

# Getting Started

## 1. Deploy to goerli

### Deploy election contract to goerli. Code is in [this repository](https://github.com/Marabunta12/election-DApp).

```
yarn hardhat deploy --network goerli
```

## 2. Create your subgraph via Subgraph Studio

### [If you need help check The Graph Docs](https://thegraph.com/docs/en/cookbook/quick-start/)

### You need to write your subgraph before deploying it. Copy necessary files from [subgraph repository](https://github.com/Marabunta12/election-dapp-graph).

## 3. Add .env file

### Create a `.env` file and place your temporary query URL into it as `NEXT_PUBLIC_SUBGRAPH_URL`. You can find temporary query url in [subgraph studio](https://thegraph.com/studio/)

## 4. Start your UI

### Make sure that:
- You have constants folder with Election ABI and networkMapping.json
- In your `networkMapping.json` you have an entry for `Election` on the goerli network. 
- You have a `NEXT_PUBLIC_SUBGRAPH_URL` in your `.env` file.

### Files in constants folder will update automatically as long as frontend and smart contract repository are in the same folder

### Then you can run frontend

```
yarn dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
