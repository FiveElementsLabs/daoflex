import { Box, Button, Spinner, Input, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import { useCreateNewFlow } from '../hooks/useCreateFlow';
import { useDistribute } from '../hooks/useDistribute';
import { ethers } from 'ethers';

export default function SuperfluidTest(): React.ReactElement {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [flowRate, setFlowRate] = useState('');
  const [flowRateDisplay, setFlowRateDisplay] = useState('');
  const { createNewFlow } = useCreateNewFlow();
  const { distribute } = useDistribute();

  function calculateFlowRate(amount: any) {
    if (isNaN(Number(amount)) === true) {
      alert('You can only calculate a flowRate based on a number');
      return;
    } else {
      const amountInWei = ethers.BigNumber.from(amount);
      const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
      const calculatedFlowRate = Number(monthlyAmount) * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }

  function CreateButton({ isLoading, children, ...props }: any) {
    return <Button {...props}>{isButtonLoading ? <Spinner animation='border' /> : children}</Button>;
  }

  const handleFlowRateChange = (e: any) => {
    setFlowRate(() => ([e.target.name] = e.target.value));

    let newFlowRateDisplay = calculateFlowRate(e.target.value);
    if (newFlowRateDisplay) setFlowRateDisplay(newFlowRateDisplay.toString());
    // setFlowRateDisplay(() => calculateFlowRate(e.target.value));
    // }
  };

  return (
    <Box p={4}>
      <h2>Create a Flow</h2>
      <form>
        <FormControl className='mb-3'>
          <Input
            name='flowRate'
            value={flowRate}
            onChange={handleFlowRateChange}
            placeholder='Enter a flowRate in wei/second'
          ></Input>
        </FormControl>

        <CreateButton
          onClick={async () => {
            setIsButtonLoading(true);
            await createNewFlow(flowRate);
            setIsButtonLoading(false);
          }}
        >
          Click to Create Your Stream
        </CreateButton>
      </form>

      <CreateButton
        onClick={async () => {
          setIsButtonLoading(true);
          await distribute(100);
          setIsButtonLoading(false);
        }}
      >
        Click to distribute 100 tokens to your wallet
      </CreateButton>
    </Box>
  );
}
