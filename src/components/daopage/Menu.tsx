import { Box, Button, HStack, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Menu({ dao }: { dao: any }) {
  return (
    <Box p={4} mt={4} w='full' rounded='lg' border='1px' borderColor={useColorModeValue('gray.300', 'gray.700')}>
      <HStack spacing={8} alignItems='center' opacity='0.85' justifyContent='center'>
        <Link to={`/${dao.name}`}>
          <Button fontSize='lg' fontWeight='extrabold' variant='link'>
            HOME
          </Button>
        </Link>
        <Link to={`/${dao.name}/tasks`}>
          <Button fontSize='lg' fontWeight='extrabold' variant='link'>
            TASKS
          </Button>
        </Link>
        <Link to={`/${dao.name}/leaderboard`}>
          <Button fontSize='lg' fontWeight='extrabold' variant='link'>
            LEADERBOARD
          </Button>
        </Link>
        <Link to={`/${dao.name}/content`}>
          <Button fontSize='lg' fontWeight='extrabold' variant='link'>
            CONTENT
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
