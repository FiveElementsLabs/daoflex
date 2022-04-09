require('@nomiclabs/hardhat-ethers');
const hardhat = require('hardhat');
//const PublicLockV8 = require('@unlock-protocol/contracts');
const abis = require('@unlock-protocol/contracts');
require('dotenv');

async function deploy() {
  const HelloFactory = await hardhat.ethers.getContractFactory('HelloUnlock');
  const hello = await HelloFactory.deploy();
  await hello.deployed();

  return hello.address;
}

async function mintAndHello() {
  try {
    const url = 'https://rinkeby.infura.io/v3/16c6d5c6dc84441d8056640f2e21a70d';
    const provider = new hardhat.ethers.providers.JsonRpcProvider(url);
    //const provider = new ethers.providers.AlchemyProvider('rinkeby');

    const wallet = new hardhat.ethers.Wallet('09975ab60c1aa253c72784dc1f143ad26761c02c9b904a8a9241ac78804fc3ad'); //private key of our wallet
    const signer = wallet.connect(provider);

    const zeroAddress = '0x0000000000000000000000000000000000000000';
    const helloAddress = await deploy();

    const lock = new hardhat.ethers.Contract(
      '0x2516b4791dc7Aa10e3eB92539B0cC1316802B14C', //address of the lock contract
      abis.PublicLockV8.abi,
      signer
    );

    //console.log(await provider.getCode('0xa55F8Ba16C5Bb580967f7dD94f927B21d0acF86c'));

    console.log(await lock.keyPrice());
    let amount = await lock.keyPrice();

    // Purchase params:
    const purchaseParams = [
      amount,
      wallet.address, // This is the recipient of the membership (us!)
      wallet.address, // The is the referrer who will earn UDT tokens (we'd like this to be us!)
      [], // empty data object (not used here)
    ];

    const gasPrice = await provider.getGasPrice();
    const options = {
      gasPrice,
      value: amount, // This is a lock that uses Ether, so it means we need send value. If it was an ERC20 we could set this to 0 and just use the amount on purchase's first argument
      gasLimit: 6700000,
    };

    // Important: we need to compute the gasLimit ourselves because it is a funcion of gasPrice
    // For safety we could also bump it (the user is refunded the difference anyway)
    //const gasEstimate = await lock.estimateGas.purchase(...purchaseParams, options);
    // options.gasLimit = gasEstimate;

    //await lock.setEventHooks(helloAddress, zeroAddress, { gasLimit: 6700000 });

    const receipt = await lock.purchase(...purchaseParams, options);
    console.log(await receipt.wait());
  } catch (error) {
    console.error(error);
  }
}

mintAndHello();

/* function setEventHooks(
    address _onKeyPurchaseHook,
    address _onKeyCancelHook,
    address _onValidKeyHook,
    address _onTokenURIHook
  ) external; */
