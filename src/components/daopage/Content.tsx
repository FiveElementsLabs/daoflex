import { Box, Button, Link, Text, useColorModeValue } from '@chakra-ui/react';
import LockButton from '../lock/LockButton';

export default function Content() {
  return (
    <Box
      px={4}
      py={8}
      rounded='xl'
      shadow='sm'
      borderWidth='1px'
      textAlign='center'
      w='full'
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      _hover={{ borderColor: useColorModeValue('gray.200', 'gray.600') }}
      transition='all 0.1s ease-in-out'
      cursor='pointer'
    >
      <Text fontSize='xl' fontWeight='bold'>
        Content
      </Text>

      <Link>
        <Button mt={6} rounded='3xl'>
          Join
        </Button>
        <LockButton />
      </Link>
    </Box>
  );
}
