import { createSelector } from 'reselect';

const getFavouriteBooks = (state) => state.shop.favourites;
const getCartBooks = (state) => state.cart.books;
const getBookId = (_state, props) => props.bookId;

export const bookIsFavourite = createSelector(getFavouriteBooks, getBookId, (favBooks, bookId) =>
  favBooks.includes(bookId)
);

export const bookIsInCart = createSelector(getCartBooks, getBookId, (cartBooks, bookId) => {
  const arrOfKeys = [];

  cartBooks.forEach((item) => {
    arrOfKeys.push(Number(Object.keys(item)[0]));
  });

  return arrOfKeys.includes(bookId);
});

export const bookCount = createSelector(getCartBooks, getBookId, (cartBooks, bookId) => {
  const book = cartBooks.find((item) => item[bookId]);

  return book ? book[bookId] : 1;
});
