import { Box, HStack } from '@chakra-ui/react';
import Content from './Content';
import Sidebar from './Sidebar';

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
