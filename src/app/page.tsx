'use client';
import { JSX, useState } from 'react';

import Rating from '@/components/rating/Rating';
import SearchBar from '@/components/searchBar/SearchBar';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState(3);
  const [searchText, setSearchText] = useState('');
  return (
    <main>
      <Rating isEditable={true} setRating={setRating} rating={rating} />
      <Rating isEditable={false} rating={4} />

      <SearchBar searchText={searchText} onSearchTextChange={setSearchText}/>
    </main>
  );
}