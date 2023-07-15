import PropTypes from 'prop-types';

import { FoodElement } from './FoodPairing.styled';

const FoodPairing = ({ food }) => {
  return (
    <>
      <FoodElement>{food}</FoodElement>
    </>
  );
};

FoodPairing.propTypes = {
  food: PropTypes.string.isRequired,
};

export default FoodPairing;
