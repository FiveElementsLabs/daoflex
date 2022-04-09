import { Box, Button, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';

export default function Sidebar() {
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
        ENS
      </Text>

      <Box display='grid' placeItems='center' w='full'>
        <Image
          src='https://464911102-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2F2TjMAeHSzwlQgcOdL48E%2Ficon%2FKWP0gk2C6bdRPliWIA6o%2Fens%20transparent%20background.png?alt=media&token=bd28b063-5a75-4971-890c-97becea09076'
          alt='ENS'
          mb={4}
          w='100px'
        />
      </Box>
      <Text fontSize='md' fontWeight='medium' mt={2} opacity='0.8'>
        {/* //TODO: better number mapping function */}
        {Math.floor(11000 / 1000)}K members
      </Text>
    </Box>
  );
}
