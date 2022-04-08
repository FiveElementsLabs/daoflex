import { Button } from '@chakra-ui/react';
import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core';

export default function Connect(props: any) {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const ens = useLookupAddress();

  return (
    <>
      {account ? (
        <Button onClick={deactivate} {...props}>
          {ens ?? shortenAddress(account)}
        </Button>
      ) : (
        <Button onClick={activateBrowserWallet} {...props}>
          Connect Wallet
        </Button>
      )}
    </>
  );
}
