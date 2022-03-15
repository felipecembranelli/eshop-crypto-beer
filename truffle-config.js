var HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config();

const MNEMONIC = process.env.KOVAN_MNEMONIC
const INFURA_KEY = process.env.INFURA_KEY

require('babel-register');
require('babel-polyfill');

console.log("MNEMONIC:" + MNEMONIC);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "wss://kovan.infura.io/ws/v3/" + INFURA_KEY)
      },
      network_id: 42,
      gas: 4000000,      //make sure this gas allocation isn't over 4M, which is the max
      skipDryRun: true,
      timeoutBlocks: 1000,
      networkCheckTimeout: 60000,
      confirmations:2
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
