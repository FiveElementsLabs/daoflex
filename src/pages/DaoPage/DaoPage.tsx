import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, HStack } from '@chakra-ui/react';
import { useSharedState } from '../../context/store';

import Hero from '../../components/daoPage/Hero';
import Content from '../../components/daoPage/Content';
import Sidebar from '../../components/daoPage/Sidebar';
import Menu from '../../components/daoPage/Menu';

export default function DaoPage() {
  const { dao } = useParams();
  const [{ dao_list }] = useSharedState();
  const navigate = useNavigate();
  const daoInfo = dao_list?.find((d: any) => d.name === dao);

  useEffect(() => {
    if (!daoInfo) navigate('/');
  }, [daoInfo, navigate]);

  return (
    <>
      {daoInfo && (
        <>
          <Hero dao={daoInfo} />
          <Menu dao={daoInfo} />
          <HStack mt={4} alignItems='flex-start' spacing={4}>
            <Box w='35%'>
              <Sidebar dao={daoInfo} />
            </Box>
            <Box w='65%'>
              <Content dao={daoInfo} />
            </Box>
          </HStack>
        </>
      )}
    </>
  );
}