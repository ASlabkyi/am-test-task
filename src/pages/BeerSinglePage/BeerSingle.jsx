import { useParams } from 'react-router-dom';
import { useBeerStore } from 'utils/store';

const BeerSingle = () => {
  const { id } = useParams();
  const beersList = useBeerStore(state => state.beerList);

  const selectedBeer = beersList.find(beer => beer.id === parseInt(id));

  return <div>{selectedBeer ? <p>{selectedBeer.name}</p> : <p>No</p>}</div>;
};

export default BeerSingle;
