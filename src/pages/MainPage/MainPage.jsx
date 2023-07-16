import BeerList from 'components/BeerList/BeerList';
import { useEffect } from 'react';
import { useBeersStore } from 'utils/store';

const MainPage = () => {
  const { fetchBeerList } = useBeersStore();

  useEffect(() => {
    localStorage.clear();
    fetchBeerList(1);
  }, [fetchBeerList]);

  return <BeerList />;
};

export default MainPage;
