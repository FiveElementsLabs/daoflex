import { Box, Button, Spinner, Input, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import { useCreateNewFlow } from '../hooks/useCreateFlow';
import { parseUnits, formatEther } from '@ethersproject/units';

export default function SuperfluidTest(): React.ReactElement {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [flowRate, setFlowRate] = useState('');
  const [flowRateDisplay, setFlowRateDisplay] = useState('');
  const { createNewFlow } = useCreateNewFlow();

  function calculateFlowRate(amount: any) {
    if (typeof Number(amount) !== 'number' || isNaN(Number(amount)) === true) {
      alert('You can only calculate a flowRate based on a number');
      return;
    } else if (typeof Number(amount) === 'number') {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = parseUnits(amount);
      const monthlyAmount = formatEther(amountInWei.toString());
      const calculatedFlowRate = Number(monthlyAmount) * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }

  function CreateButton({ isLoading, children, ...props }: any) {
    return (
      <Button variant='success' className='button' {...props}>
        {isButtonLoading ? <Spinner animation='border' /> : children}
      </Button>
    );
  }

  const handleFlowRateChange = (e: any) => {
    setFlowRate(() => ([e.target.name] = e.target.value));
    if (typeof Number(flowRate) === 'number') {
      let newFlowRateDisplay = calculateFlowRate(e.target.value);
      if (newFlowRateDisplay) setFlowRateDisplay(newFlowRateDisplay.toString());
      // setFlowRateDisplay(() => calculateFlowRate(e.target.value));
      // }
    }
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

      <div className='description'>
        <p>
          Go to the CreateFlow.js component and look at the <b>CreateFlow() </b>
          function to see under the hood
        </p>
        <div className='calculation'>
          <p>Your flow will be equal to:</p>
          <p>
            <b>${flowRateDisplay !== ' ' ? flowRateDisplay : 0}</b> DAIx/month
          </p>
        </div>
      </div>
    </Box>
  );
}
