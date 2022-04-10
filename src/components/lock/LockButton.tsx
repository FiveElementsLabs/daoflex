import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

export default function LockButton() {
  const [locked, setLocked] = useState('locked');
  /**
   * Invoked to show the checkout modal provided by Unlock (optional... but convenient!)
   */
  function checkout() {
    //@ts-ignore
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal();
    setLocked('unlocked');
  }

  function handleClick(e: any) {
    e.preventDefault();
    checkout();

    console.log(e);
    setLocked(e.detail);
  }

  return (
    <Button mt={6} rounded='3xl'>
      {locked === 'locked' && (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          Unlock me!{' '}
          <span aria-label='locked' role='img'>
            🔒
          </span>
        </div>
      )}
      {locked === 'unlocked' && (
        <div>
          Unlocked!{' '}
          <span aria-label='unlocked' role='img'>
            🗝
          </span>
        </div>
      )}
    </Button>
  );
}
