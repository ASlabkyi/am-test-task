import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import BeerSingle from 'pages/BeerSinglePage/BeerSingle';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<BeerSingle />} />
      </Routes>
    </div>
  );
};
