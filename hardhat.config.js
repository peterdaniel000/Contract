require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = "0x6B9fCafAF6c2cABb3D788F34652C31e3dF0e16Cf";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "swisstronik",
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {

    },
    swisstronik: {
    url: 'https://json-rpc.testnet.swisstronik.com/',
    accounts: [`0x${PRIVATE_KEY}`],
    },
  },

paths: {
  sources: "./contracts",
  tests: "./test",
  cache: "./cache",
  artifacts: "./artifacts"
},
mocha: {
  timeout: 40000
  }
}




