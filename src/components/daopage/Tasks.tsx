import { Box, Checkbox, HStack, Text, useColorModeValue } from '@chakra-ui/react';

export default function Tasks({ dao }: { dao: any }) {
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
      <Text fontSize='xl' fontWeight='bold' mb={4}>
        Tasks available
      </Text>

      {list.map(task => (
        <Task key={task.id} task={task} dao={dao} />
      ))}
    </Box>
  );
}

function Task({ task, dao }: { task: any; dao: any }) {
  return (
    <Box
      p={2}
      textAlign='left'
      mb={2}
      border='1px'
      rounded='lg'
      borderColor={useColorModeValue('gray.300', 'gray.700')}
    >
      <HStack spacing={4} alignItems='center' justifyContent='space-between'>
        <HStack spacing={2} alignItems='center' mb={1}>
          <Text fontSize='3xl' fontWeight='bold' opacity='0.8'>
            # {task.id}:
          </Text>
          <Box>
            <Text fontSize='lg' mt='8px'>
              {task.title}
            </Text>
          </Box>
        </HStack>

        <Checkbox pr={2} colorScheme='green' size='lg' style={{ transform: 'scale(1.5)' }} />
      </HStack>
    </Box>
  );
}

const list = [
  {
    id: 1,
    title: 'Like us on Twitter 🥰',
    link: 'https://twitter.com/ens_dao',
    status: 0,
    reward: 100,
  },
  {
    id: 2,
    title: 'Follow us on Instagram 📸',
    link: 'https://www.instagram.com/ens_dao/',
    status: 0,
    reward: 100,
  },
  {
    id: 3,
    title: 'Follow us on Medium 📖',
    link: 'https://medium.com/ens-dao',
    status: 0,
    reward: 50,
  },
  {
    id: 4,
    title: 'Star us on Github 💎',
    link: 'https://github.com/ens-dao',
    status: 0,
    reward: 200,
  },
];
