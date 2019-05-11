import React, { Props } from 'react';
import { getMovieRuntime, getReleaseYear } from './MovieHelper';
import { Movie } from '../model/Movie';

function ItemOverview(props: any) {
  const movie: Movie = props.item;

  let runtime = getMovieRuntime(movie.trackTimeMillis);
  runtime = runtime ? ' - ' + runtime : '';

  const releaseYear = getReleaseYear(movie.releaseDate.toString());
  const releaseYearAsString = releaseYear ? ' - ' + releaseYear : '';

  return (
    <div className="search-item-overview">
      <span>{movie.primaryGenreName}</span>
      <span>{runtime}</span>
      <span>{releaseYearAsString}</span>
    </div>
  );
}

export { ItemOverview };
