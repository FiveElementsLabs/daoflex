import { Mumbai } from '@usedapp/core';
import config from '../app.config';

const dAppConfig = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]: config.web3.rpc || 'https://rpc-mumbai.matic.today',
  },
  notifications: {
    expirationPeriod: 3000,
  },
};

export default dAppConfig;
