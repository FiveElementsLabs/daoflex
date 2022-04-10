import { ethers } from 'ethers';
import { useSharedState } from '../context/store';

export function useBalance() {
  const [{ account, provider }] = useSharedState();

  const DAIx = '0x745861AeD1EEe363b4AaA5F1994Be40b1e05Ff90';

  const getBalance = async () => {
    try {
      const contract = new ethers.Contract(DAIx, DAIx_ABI, provider);
      const balance = await contract.balanceOf(account);
      console.log('balance: ', balance);
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  return { getBalance };
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
