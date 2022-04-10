import { Box, HStack } from '@chakra-ui/react';
import Content from '../components/daopage/Content';
import Sidebar from '../components/daopage/Sidebar';

export default function DaoPage() {
  return (
    <Box minH='100vh'>
      <HStack align='top'>
        <Box w='35%'>
          <Sidebar></Sidebar>
        </Box>
        <Box w='65%'>
          <Content></Content>
        </Box>
      </HStack>
    </Box>
  );
}
