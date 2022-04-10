import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react';
import LockButton from '../lock/LockButton';

export default function Content({ dao }: { dao: any }) {
  return (
    <Box
      px={4}
      py={8}
      rounded='xl'
      shadow='sm'
      borderWidth='1px'
      textAlign='center'
      w='full'
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      _hover={{ borderColor: useColorModeValue('gray.400', 'gray.600') }}
      transition='all 0.1s ease-in-out'
      cursor='pointer'
    >
      <Text fontSize='xl' fontWeight='bold'>
        Help decide the future of ENS
      </Text>
      <Text py={4}>
        With the launch of $ENS and the DAO, the community will be empowered to govern the ENS protocol.
      </Text>
      <Text py={4}> To unlock $ENS make sure you have enough balance.</Text>

      <Link>
        <LockButton />
      </Link>
    </Box>
  );
}
