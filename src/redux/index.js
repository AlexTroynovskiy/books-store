import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { booksReducer } from './Books/reducer';
import { cartReducer } from './Cart/reducer';
import { userReducer } from './UserSpecific/reducer';
import { errorReducer } from './Error/reducer';

const userPersistConfig = {
  key: 'isLogged',
  storage,
  whitelist: ['isLogged'],
  stateReconciler: autoMergeLevel2,
};

const shopPersistConfig = {
  key: 'favourites',
  storage,
  whitelist: ['favourites'],
  stateReconciler: autoMergeLevel2,
};

const cartPersistConfig = {
  key: 'books',
  storage,
  whitelist: ['books'],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  shop: persistReducer(shopPersistConfig, booksReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
  user: persistReducer(userPersistConfig, userReducer),
  error: errorReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
