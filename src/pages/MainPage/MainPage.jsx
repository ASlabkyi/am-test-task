import BeerList from 'components/BeerList/BeerList';
import { useEffect } from 'react';

import { useBeerStore } from 'utils/store';

const MainPage = () => {
  const fetchBeerList = useBeerStore(state => state.fetchBeerList);

  useEffect(() => {
    fetchBeerList(1);
  }, [fetchBeerList]);

  return <BeerList />;
};

export default MainPage;
