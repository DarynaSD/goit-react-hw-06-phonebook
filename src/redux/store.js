import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 


// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({ reducer: rootReducer, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), });
export const persistor = persistStore(store)



//old example
// const { createStore } = require('redux');

// const reducer = (state, action) => {
//    console.log('state >>', state);
//    console.log('action >>', action);
//   if (action.type === 'update number')
//       return { ...state, number: action.payload }; else
//   return { ...state, members: action.payload };
// };

// export const store = createStore(reducer, { number: 40, members: ['alex'], });
// console.log('store >>', store);

// console.log(store.getState());

// store.dispatch({ type: 'update number', payload: 20 });
// console.log('store >>', store.getState());
// store.dispatch({ type: 'update members', payload: ['bob'] });
// console.log('store >>', store.getState());