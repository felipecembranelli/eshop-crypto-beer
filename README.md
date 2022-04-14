# Dapp blockchain based e-commerce system with Ethereum

This is a Dapp (decentralized application) sample implementation of a e-commerce system using blockchain and ethereum network, available for studying. 

The frontend application was forked and adapted using the repository [e-shop](https://github.com/james-muriithi/e-shop).

## Live demo

[Live Demo](http://eshop-blockchain3.azurewebsites.net/)

The smartcontract is deployed to KOVAN test network.


![home](/doc/beer-crypto1.PNG)

![redeem](/doc/beer-crypto1.PNG)


## Features

- Metamask integration using web3.js
- Creates a fake cryptocurrency (technically a token), using symbol CEM (refers to my last name "Cembranelli"), following [ERC-20](https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/) token standard

## Stack

- [Truffle](https://trufflesuite.com/): This comes with a development environment, a testing framework, and a development blockchain.
- Solidity: used to develop the smart contracts.
- [Web3.js](): A library for interacting with metamask and deployed smart contracts on the frontend.
- [Ganache](https://www.trufflesuite.com/ganache): A development blockchain for deploying smart contracts and inspecting state during development,
- [React.js](https://reactjs.org/): A framework for building user interfaces.
- [Metamask](https://metamask.io/): A wallet for user private keys management.

## 🚀 Quick start

> Install

To be able to run this app, you’ll need to have:

- Node.js.
- Truffle.
- Ganache development blockchain.
- Metamask chrome extension.

Note that we won’t need real Ether tokens as we will be using test Ether tokens from our development blockchain (Ganache).

> Before you run the application

1) Start your Ganache blockchain

![ganache](/doc/ganache.png)

2) Deploy the smart contract

Go to the root folder and run:

```
truffle migrate
```

This contract will create the token (CEM) with an initial total supply of 1 milion. It will then transfer this amount to the account[0].

> How to run

```
$ git clone https://github.com/felipecembranelli/eshop-crypto-beer.git
$ npm install
$ npm start
```

> Then in your browser go to [http://localhost:8000/](http://localhost:8000/)

## Licence

[0BSD](LICENSE)

