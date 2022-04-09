import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { useLoadProfiles } from '../../hooks/useLoadProfiles';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  useLoadProfiles();

  return (
    <Container maxW='container.lg'>
      <Navbar />

      <Outlet />

      <Footer />
    </Container>
  );
}
