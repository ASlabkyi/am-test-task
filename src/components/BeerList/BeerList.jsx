import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import useBeerStore from 'utils/store';

const BeerList = () => {
  const beersList = useBeerStore(state => state.beerList);
  const toggleBeerSelection = useBeerStore(state => state.toggleBeerSelection);
  const selectedBeers = useBeerStore(state => state.selectedBeers);
  const deleteSelectedBeers = useBeerStore(state => state.deleteSelectedBeers);

  const handleRightClick = (event, id) => {
    event.preventDefault();
    toggleBeerSelection(id);
  };

  console.log(beersList);

  return (
    <div>
      {selectedBeers.length > 0 && (
        <button
          onClick={deleteSelectedBeers}
          style={{
            width: '100%',
            padding: '25px 30px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      )}
      <ul>
        {beersList?.slice(0, 15).map(({ id, name, image_url: imageUrl }) => {
          const uniqueKey = nanoid();
          return (
            <li
              key={uniqueKey}
              onContextMenu={event => handleRightClick(event, id)}
              style={{
                background: selectedBeers.includes(id) ? 'lightblue' : 'white',
                cursor: 'pointer',
              }}
            >
              <Link to={`/${id}`}>
                {/* <img src={imageUrl} alt={name} /> */}
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
