import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Item } from './BeerListItem.styled';

const BeerItem = memo(({ id, name, imageUrl, handleRightClick, selected }) => {
  return (
    <div>
      <Item
        onContextMenu={event => handleRightClick(event, id)}
        style={{
          background: selected ? 'lightblue' : 'white',
        }}
      >
        <Link to={`/${id}`}>
          <img src={imageUrl} alt={name} />
          <h2>{name}</h2>
        </Link>
      </Item>
    </div>
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
