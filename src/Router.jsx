import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from './lib/wrapper';

// This is the main Layout.
import Layout from './components/layout/Layout';

// These are all the pages that use the main Layout.
import Home from './pages/Home';
import DaoPage from './pages/DaoPage/DaoPage';
import Tasks from './pages/DaoPage/Tasks';
import Leaderboard from './pages/DaoPage/Leaderboard';
import Content from './pages/DaoPage/Content';

export default function Router() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/:dao' element={<DaoPage />} />
            <Route path='/:dao/tasks' element={<Tasks />} />
            <Route path='/:dao/leaderboard' element={<Leaderboard />} />
            <Route path='/:dao/content' element={<Content />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
