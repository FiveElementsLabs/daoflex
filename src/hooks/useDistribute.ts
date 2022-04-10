import { ethers } from 'ethers';
import { useSharedState } from '../context/store';

export function useDistribute() {
  const [{ account }] = useSharedState();

  const DAIx = '0x745861AeD1EEe363b4AaA5F1994Be40b1e05Ff90';
  const recipient = account;

  // TODO: handle distribution via smart contract or keeper script
  // We distribute tokens from the dev wallet to the user
  const distribute = async (amount: number) => {
    try {
      const url = 'https://rinkeby.infura.io/v3/61a9f83ab0ae4873818b67960409b7fe';
      const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

      const wallet = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY || '');
      const signer = wallet.connect(customHttpProvider);
      const currentGasPrice = await customHttpProvider.getGasPrice();
      const gasPrice = ethers.utils.hexlify(parseInt(currentGasPrice.toString()));
      console.log('gas price: ', gasPrice);

      const contract = new ethers.Contract(DAIx, DAIx_ABI, signer);
      const amountFinal = ethers.utils.parseUnits(amount.toString(), 18);
      console.log('amount final: ', amountFinal);

      const tx = await contract.transfer(recipient, amountFinal);
      console.log('tx: ', tx);
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  return { distribute };
}

const DAIx_ABI = [
  { stateMutability: 'payable', type: 'fallback' },
  {
    inputs: [{ internalType: 'address', name: 'initialAddress', type: 'address' }],
    name: 'initializeProxy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
