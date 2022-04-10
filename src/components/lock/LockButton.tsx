import { useState, useEffect } from 'react';
import { Alert, AlertIcon, Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Lock } from 'phosphor-react';

export default function LockButton() {
  const [locked, setLocked] = useState('locked');

  async function checkout() {
    (window as any).unlockProtocol && (window as any).unlockProtocol.loadCheckoutModal();
  }

  const unlockHandler = (e: any) => setLocked(e.detail);

  useEffect(() => {
    window.addEventListener('unlockProtocol', unlockHandler);

    return () => window.removeEventListener('unlockProtocol', unlockHandler);
  }, []);

  return (
    <div>
      {locked === 'locked' && (
        <Button mt={6} rounded='3xl'>
          <Flex onClick={async () => await checkout()} cursor='pointer' alignItems='center'>
            <Text mr={2}>Unlock Member-only content</Text>
            <Lock size={22} />
          </Flex>
        </Button>
      )}
      {locked === 'unlocked' && (
        <>
          <Alert status='success'>
            <AlertIcon />
            Your exclusive content. Super!
          </Alert>
          <Box w='100%' p={4}>
            Check your eligibility and claim your $ENS airdrop. Call for Delegates post
          </Box>
          <Link to='https://claim.ens.domains'>
            <Button>Airdrop Claim Site</Button>
          </Link>
        </>
      )}
    </div>
  );
}
