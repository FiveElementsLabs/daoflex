import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, HStack } from '@chakra-ui/react';
import { useSharedState } from '../../context/store';

import Hero from '../../components/dao/Hero';
import DAOContent from '../../components/dao/Content';
import Sidebar from '../../components/dao/Sidebar';
import Menu from '../../components/dao/Menu';

export default function Content() {
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
              <DAOContent dao={daoInfo} />
            </Box>
          </HStack>
        </>
      )}
    </>
  );
}
