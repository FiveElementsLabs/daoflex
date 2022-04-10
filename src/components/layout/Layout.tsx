import { useEffect } from 'react';
import { Box, Container, SlideFade } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { useWallet } from '../../hooks/useWallet';
import { useLoadData } from '../../hooks/useLoadData';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { autoLoginWallet } = useWallet();
  const { loadData } = useLoadData();
  const location = useLocation();

  // Things that need to be loaded only on the first render
  useEffect(() => {
    (async () => {
      await autoLoginWallet();
      loadData();
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxW='container.lg'>
      <Navbar />

      <Box mt={4}>
        <SlideFade key={location.pathname} offsetY='20px' in>
          <Outlet />
        </SlideFade>
      </Box>

      <Footer />
    </Container>
  );
}
