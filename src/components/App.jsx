import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SyncLoader } from 'react-spinners';
import Layout from './Layout/Layout';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const BeerSingle = lazy(() => import('pages/BeerSinglePage/BeerSingle'));

export const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <SyncLoader color="#123abc" size={40} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/:id" element={<BeerSingle />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
