import { useState, useEffect } from 'react';
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { useBalance } from '../../hooks/useBalance';
import { ethers } from 'ethers';

export default function Sidebar({ dao }: { dao: any }) {
  const { getBalance } = useBalance();
  const [balance, setBalance] = useState<any>(0);

  const fetchBalance = async () => {
    while (true) {
      const bal = await getBalance();
      if (bal) setBalance(ethers.utils.formatEther(bal));
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  useEffect(() => {
    (async () => {
      fetchBalance();
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      px={4}
      py={8}
      rounded='xl'
      shadow='sm'
      borderWidth='1px'
      textAlign='left'
      w='full'
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      _hover={{ borderColor: useColorModeValue('gray.400', 'gray.600') }}
      transition='all 0.1s ease-in-out'
    >
      <Box display='grid' placeItems='center' w='full'>
        <Image src={dao.image} alt={dao.name} mb={4} w='100px' />
      </Box>
      <Text fontSize='md' fontWeight='medium' mt={2} opacity='0.8'>
        Your points: {balance}
      </Text>
      <Text mt={2} opacity='0.8'>
        Points required for the next tier: 3000
      </Text>
    </Box>
  );
}
