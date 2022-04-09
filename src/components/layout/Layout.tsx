import { useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useWallet } from '../../hooks/useWallet';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { autoLoginWallet } = useWallet();

  useEffect(() => {
    (async () => {
      await autoLoginWallet();
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxW='container.lg'>
      <Navbar />

      <Outlet />

      <Footer />
    </Container>
  );
}
