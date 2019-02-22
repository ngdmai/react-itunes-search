import React from 'react';

import { storiesOf } from '@storybook/react';

import SearchBar from '../search-bar/SearchBar';
import SearchItem from '../search-item/SearchItem';

import { FEATUREMOVIE } from './mock-data/feature-movie';
import { SONG } from './mock-data/song';
import { AUDIOBOOK } from './mock-data/audiobook';

storiesOf('SearchBar', module).add('empty search bar', () => <SearchBar />);

storiesOf('Search Item', module)
  .add('search item movie', () => <SearchItem item={FEATUREMOVIE} />)
  .add('search item music', () => <SearchItem item={SONG} />)
  .add('search item audiobook', () => <SearchItem item={AUDIOBOOK} />);
