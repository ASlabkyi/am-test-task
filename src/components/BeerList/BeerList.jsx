import { Link } from 'react-router-dom';
import { useBeerStore } from 'utils/store';

const BeerList = () => {
  const beersList = useBeerStore(state => state.beerList);

  return (
    <div>
      <ul>
        {beersList?.slice(0, 15).map(({ id, name, image_url: imageUrl }) => {
          return (
            <li key={id}>
              <Link to={`/${id}`}>
                <img src={imageUrl} alt={name} />
                <h2>{name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BeerList;
