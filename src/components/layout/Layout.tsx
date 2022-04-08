import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <Container maxW='container.lg'>
      <Navbar />

      <Outlet />

      <Footer />
    </Container>
  );
}
