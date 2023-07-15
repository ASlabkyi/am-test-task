import { Link, useLocation, useParams } from 'react-router-dom';
import useBeerStore from 'utils/store';

const BeerSingle = () => {
  const { id } = useParams();
  const location = useLocation();
  const beersList = useBeerStore(state => state.beerList);

  const detailsLink = location.state?.from ?? '/';

  const selectedBeer = beersList.find(beer => beer.id === parseInt(id));
  const { name, image_url: imageUrl, description } = selectedBeer;
  return (
    <div>
      {selectedBeer ? (
        <div>
          <Link to={detailsLink} state={{ from: location }}>
            Go Back
          </Link>
          <img src={imageUrl} alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      ) : (
        alert('Page not found')
      )}
    </div>
  );
};

export default BeerSingle;
