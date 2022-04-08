import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from './lib/wrapper';

// This is the main Layout.
import Layout from './components/layout/Layout';

// These are all the pages that use the main Layout.
import Home from './pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
