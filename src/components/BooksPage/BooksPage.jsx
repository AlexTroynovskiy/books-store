import React, { useState } from 'react';

import BookList from '../BookList/';
import Search from '../Search';
import { SlickSlider } from '../SlickSlider';
import FilterBar from '../FilterBar';

export const BooksPage = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <SlickSlider />
      {!isFavorite && <FilterBar isFavorite={isFavorite} />}
      {!isFavorite && <Search />}
      <BookList isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
    </>
  );
};
