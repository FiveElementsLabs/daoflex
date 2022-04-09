import { Box, HStack } from '@chakra-ui/react';
import Content from '../components/daopage/Content';
import Sidebar from '../components/daopage/Sidebar';

export default function DaoPage() {
  return (
    <HStack alignItems='flex-start'>
      <Box w='35%'>
        <Sidebar />
      </Box>
      <Box w='65%'>
        <Content />
      </Box>
    </HStack>
  );
}
