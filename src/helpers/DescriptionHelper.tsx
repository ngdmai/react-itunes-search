import React from 'react';

interface Props {
  primaryGenreName: string;
  contentAdvisoryRating: string;
  trackPrice: string;
  currency: string;
  trackRentalPrice: string;
}

function ItemOverview({ item }: any) {
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
