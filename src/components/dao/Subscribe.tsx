import { Box, Button, Flex, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Sparkle, Chats, Coins, YoutubeLogo, Image } from 'phosphor-react';
import { useDistribute } from '../../hooks/useDistribute';
import { useCreateNewFlow } from '../../hooks/useCreateFlow';
import { useLoading } from '../../hooks/useLoading';

export default function Subscribe({ dao }: { dao: any }) {
  const { createNewFlow } = useCreateNewFlow();
  const { distribute } = useDistribute();
  const { loading } = useLoading();

  const subscribe = async () => {
    console.log('subscribing to ', dao.name);
    loading(8);
    const amount = 100;
    const flowRate = 1e16;

    await distribute(amount);
    await createNewFlow(flowRate.toString());
  };

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
      <Text fontSize='xl' fontWeight='bold' mb={6}>
        Become a member of <b>{dao.name}</b>
      </Text>

      <Button rounded='3xl' onClick={subscribe}>
        <Flex alignItems='center'>
          <Text mr={2}>Subscribe now</Text>
          <Sparkle size={24} />
        </Flex>
      </Button>

      <Box p={4} mt={6} display='grid' placeContent='center'>
        <Text fontWeight='medium'>Based on your contribution level, benefits include: </Text>
        <Flex gap={4} mt={4}>
          <Box
            w='120px'
            h='90px'
            display='grid'
            placeContent='center'
            bg={useColorModeValue('gray.200', 'gray.700')}
            rounded='md'
          >
            <VStack>
              <Chats size={32} />
              <Text fontSize='md' fontWeight='medium'>
                Chats
              </Text>
            </VStack>
          </Box>
          <Box
            w='120px'
            h='90px'
            display='grid'
            placeContent='center'
            bg={useColorModeValue('gray.200', 'gray.700')}
            rounded='md'
          >
            <VStack>
              <Image size={32} />
              <Text fontSize='md' fontWeight='medium'>
                NFTs
              </Text>
            </VStack>
          </Box>
          <Box
            w='120px'
            h='90px'
            display='grid'
            placeContent='center'
            bg={useColorModeValue('gray.200', 'gray.700')}
            rounded='md'
          >
            <VStack>
              <YoutubeLogo size={32} />
              <Text fontSize='md' fontWeight='medium'>
                Media
              </Text>
            </VStack>
          </Box>
          <Box
            w='120px'
            h='90px'
            display='grid'
            placeContent='center'
            bg={useColorModeValue('gray.200', 'gray.700')}
            rounded='md'
          >
            <VStack>
              <Coins size={32} />
              <Text fontSize='md' fontWeight='medium'>
                Whitelists
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Text fontWeight='medium'>And much more!</Text>
    </Box>
  );
}
