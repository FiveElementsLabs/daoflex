import { Box, Button, Link, Text, useColorModeValue } from '@chakra-ui/react';

export default function Leaderboard({ dao }: { dao: any }) {
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
        Leaderboard
      </Text>

      <Link>
        <Button mt={6} rounded='3xl'>
          Join DAO to view
        </Button>
      </Link>
    </Box>
  );
}
