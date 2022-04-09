import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';

export function useDistribute() {
  const { account } = useEthers();

  const DAIx = '0x745861AeD1EEe363b4AaA5F1994Be40b1e05Ff90';

  const url = 'https://rinkeby.infura.io/v3/61a9f83ab0ae4873818b67960409b7fe';
  const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

  const distribute = async (amount: number) => {
    // TODO: use ethers to send transaction to signed-in user
  };

  return { distribute };
}
