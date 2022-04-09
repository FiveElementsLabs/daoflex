import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, HStack } from '@chakra-ui/react';
import { useSharedState } from '../../context/store';

import Hero from '../../components/daoPage/Hero';
import Menu from '../../components/daoPage/Menu';
import Sidebar from '../../components/daoPage/Sidebar';
import DaoTasks from '../../components/daoPage/Tasks';

export default function Tasks() {
  const { dao } = useParams();
  const navigate = useNavigate();
  const [{ dao_list }] = useSharedState();
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
              <DaoTasks dao={daoInfo} />
            </Box>
          </HStack>
        </>
      )}
    </>
  );
}
