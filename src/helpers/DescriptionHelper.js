import React from 'react';

function ItemOverview({ item }) {
  return (
    <div className="search-item-overview">
      <span>{item.primaryGenreName} - </span>
      <span>{item.contentAdvisoryRating} - </span>
      <span>
        {item.trackPrice} {item.currency} -{' '}
      </span>
      <span>
        {item.trackRentalPrice} {item.currency}
      </span>
    </div>
  );
}

export { ItemOverview };
