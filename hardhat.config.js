require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/16c6d5c6dc84441d8056640f2e21a70d', //Infura url with projectId
      accounts: ['09975ab60c1aa253c72784dc1f143ad26761c02c9b904a8a9241ac78804fc3ad'], // add the account that will deploy the contract (private key)
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};
