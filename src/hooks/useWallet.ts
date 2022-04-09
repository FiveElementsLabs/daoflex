import { useState } from 'react';
import { ethers } from 'ethers';
import { useToast } from '@chakra-ui/react';
import { useSharedState } from '../context/store';
import config from '../app.config';

export const useWallet = () => {
  const toast = useToast();
  const [, dispatch] = useSharedState();
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

  const connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const account = (await provider.send('eth_requestAccounts', []))[0];
    const eth_balance = ethers.utils.formatEther(await provider.getBalance(account));
    setProvider(provider);
    dispatch({ type: 'LOGIN_WALLET', payload: { account, provider, eth_balance } });
  };

  const checkCorrectNetwork = async () => {
    if (!provider) return;
    const { chainId } = provider.network;
    if (chainId !== config.web3.chain_id) {
      toast({
        title: 'Wrong Network',
        description: `Please switch to ${config.web3.chain_name} network`,
        status: 'error',
        duration: 5000,
        position: 'bottom-right',
      });
      await (window as any).ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: config.web3.chain_id,
            rpcUrls: [config.web3.rpc_url],
            chainName: config.web3.chain_name,
            blockExplorerUrls: [config.web3.block_explorer],
            nativeCurrency: {
              name: config.web3.native_currency.name,
              symbol: config.web3.native_currency.symbol,
              decimals: config.web3.native_currency.decimals,
            },
          },
        ],
      });
    }
  };

  const loginWallet = async () => {
    try {
      await connectMetamask();
      await checkCorrectNetwork();

      toast({
        title: 'Wallet Connected',
        description: 'You are now connected to your wallet',
        status: 'success',
        duration: 5000,
        position: 'bottom-right',
      });
    } catch (err) {
      console.log(err);
      toast({
        title: 'Error',
        description: 'Please install Metamask',
        status: 'error',
        duration: 5000,
        position: 'bottom-right',
      });
    }
  };

  const autoLoginWallet = async () => {
    const shouldAutoConnect = window.localStorage.getItem('shouldConnectMetamask') === 'true';

    if (shouldAutoConnect) {
      await loginWallet();
    }
  };

  const logoutWallet = async () => {
    dispatch({ type: 'LOGOUT_WALLET' });
    toast({
      title: 'Wallet Disconnected',
      description: 'You are now disconnected from your wallet',
      status: 'success',
      duration: 5000,
      position: 'bottom-right',
    });
  };

  return { loginWallet, autoLoginWallet, logoutWallet };
};
