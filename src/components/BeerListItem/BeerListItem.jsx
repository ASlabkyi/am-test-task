import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BeerItem = memo(({ id, name, imageUrl, handleRightClick, selected }) => {
  return (
    <li
      onContextMenu={event => handleRightClick(event, id)}
      style={{
        background: selected ? 'lightblue' : 'white',
        cursor: 'pointer',
      }}
    >
      <Link to={`/${id}`}>
        {/* <img src={imageUrl} alt={name} /> */}
        <h2>{name}</h2>
      </Link>
    </li>
  );
});

BeerItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  handleRightClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default BeerItem;
