import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';

export default function Sidebar({ dao }: { dao: any }) {
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
    >
      <Box display='grid' placeItems='center' w='full'>
        <Image src={dao.image} alt={dao.name} mb={4} w='100px' />
      </Box>
      <Text fontSize='md' fontWeight='medium' mt={2} opacity='0.8'>
        {/* //TODO: better number mapping function */}
        {Math.floor(11000 / 1000)}K members
      </Text>
    </Box>
  );
}
