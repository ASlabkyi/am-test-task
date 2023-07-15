import { Link, useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import useBeerStore from 'utils/store';

import FoofPairing from 'components/FoodPairing/FoodPairing';

import { Container } from './BeerSingle.styled';

const BackLink = styled(Link)`
  margin-bottom: 1rem;
  color: #0077ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BeerSingle = () => {
  const location = useLocation();
  const detailsLink = location.state?.from ?? '/';
  const { id } = useParams();

  const beersList = useBeerStore(state => state.beerList);

  const selectedBeer = beersList.find(beer => beer.id === parseInt(id));

  if (!selectedBeer) {
    alert('Page not found');
    return;
  }

  const {
    name,
    image_url: imageUrl,
    description,
    food_pairing: foodPairing,
  } = selectedBeer;
  return (
    <Container>
      <BackLink to={detailsLink} state={{ from: location }}>
        Go Back
      </BackLink>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h4>It tastes better with </h4>
      <ul>
        {foodPairing.map((food, index) => (
          <FoofPairing key={index} food={food} />
        ))}
      </ul>
    </Container>
  );
};

export default BeerSingle;
