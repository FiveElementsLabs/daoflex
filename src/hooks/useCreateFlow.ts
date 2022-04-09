import { Framework } from '@superfluid-finance/sdk-core';
import { useEthers } from '@usedapp/core';

export function useCreateNewFlow() {
  const { account, library } = useEthers();

  const signer = library?.getSigner();
  // TODO: change to use multisig?
  const recipient = '0x326BA6F8aCB954C476123dEf8B81B4c20063C97c';
  const DAIx = '0x745861AeD1EEe363b4AaA5F1994Be40b1e05Ff90';

  const createNewFlow = async (flowRate: string) => {
    const sf = await Framework.create({
      networkName: 'rinkeby',
      provider: library,
    });

    try {
      if (signer) {
        const createFlowOperation = sf.cfaV1.createFlow({
          flowRate: flowRate,
          receiver: recipient,
          superToken: DAIx,
          // userData?: string
        });

        console.log('Creating your stream...');

        const result = await createFlowOperation.exec(signer);
        console.log(result);

        console.log(
          `Congrats - you've just created a money stream!
        View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
        Network: Rinkeby
        Super Token: DAIx
        Sender: ${account}
        Receiver: ${recipient}
        FlowRate: ${flowRate}
        `
        );
      }
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  };

  return { createNewFlow };
}
