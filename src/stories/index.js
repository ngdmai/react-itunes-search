import React from 'react';

import { storiesOf } from '@storybook/react';

import SearchBar from '../search-bar/SearchBar';
import SearchItem from '../search-item/SearchItem';

storiesOf('SearchBar', module).add('empty search bar', () => <SearchBar />);

export const item = {
  key: 1,
  kind: 'feature-movie',
  trackName: 'The Mummy',
  artworkUrl100:
    'https://is4-ssl.mzstatic.com/image/thumb/Video128/v4/62/ba/8b/62ba8bac-1dc1-1d3e-4732-5ecab68dab3d/source/100x100bb.png'
};

storiesOf('Search Item', module).add('example search item', () => (
  <SearchItem item={item} />
));
