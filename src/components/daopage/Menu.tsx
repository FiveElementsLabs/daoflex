import { Box, Button, HStack, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Menu({ dao }: { dao: any }) {
  const bg = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box p={4} mt={4} w='full' rounded='lg' border='1px' borderColor={useColorModeValue('gray.300', 'gray.700')}>
      <HStack spacing={2} alignItems='center' opacity='0.85' justifyContent='center'>
        <Link to={`/${dao.name}`}>
          <Button
            fontSize='lg'
            fontWeight='extrabold'
            variant='link'
            p='0.5rem'
            transition='all 0.2s ease-in-out'
            _hover={{ backgroundColor: bg, padding: '0.5rem' }}
          >
            HOME
          </Button>
        </Link>
        <Link to={`/${dao.name}/tasks`}>
          <Button
            fontSize='lg'
            fontWeight='extrabold'
            variant='link'
            p='0.5rem'
            transition='all 0.2s ease-in-out'
            _hover={{ backgroundColor: bg, padding: '0.5rem' }}
          >
            TASKS
          </Button>
        </Link>
        <Link to={`/${dao.name}/leaderboard`}>
          <Button
            fontSize='lg'
            fontWeight='extrabold'
            variant='link'
            p='0.5rem'
            transition='all 0.2s ease-in-out'
            _hover={{ backgroundColor: bg, padding: '0.5rem' }}
          >
            LEADERBOARD
          </Button>
        </Link>
        <Link to={`/${dao.name}/content`}>
          <Button
            fontSize='lg'
            fontWeight='extrabold'
            variant='link'
            p='0.5rem'
            transition='all 0.2s ease-in-out'
            _hover={{ backgroundColor: bg, padding: '0.5rem' }}
          >
            CONTENT
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
