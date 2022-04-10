import { useState, useEffect } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
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
    <Button mt={6} rounded='3xl'>
      {locked === 'locked' && (
        <Flex onClick={async () => await checkout()} cursor='pointer' alignItems='center'>
          <Text mr={2}>Unlock Member-only content</Text>
          <Lock size={22} />
        </Flex>
      )}
      {locked === 'unlocked' && <div>Unlocked!</div>}
    </Button>
  );
}
