// const { createStore } = require('redux');

// const reduser = (state, action) => {
//    console.log('state >>', state);
//    console.log('action >>', action);
//   if (action.type === 'update number')
//       return { ...state, number: action.payload }; else
//   return { ...state, members: action.payload };
// };

// export const store = createStore(reduser, { number: 40, members: ['alex'], });
// console.log('store >>', store);

// console.log(store.getState());

// store.dispatch({ type: 'update number', payload: 20 });
// console.log('store >>', store.getState());
// store.dispatch({ type: 'update members', payload: ['bob'] });
// console.log('store >>', store.getState());

const { createStore } = require('redux');

const reduser = (state, action) => {
  if (action.type === 'createTodo')
    return { ...state, contacts: state.contacts ? [action.payload, ...state.contacts] : [action.payload] };
  else return { ...state, members: action.payload };
};

const INITAL = [
      { id: 'id-1', contactName: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', contactName: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', contactName: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', contactName: 'Annie Copeland', number: '227-91-26' },
    ]

export const store = createStore(reduser, { contacts: INITAL, filter: null });
console.log('store >>', store);

console.log(store.getState());

store.dispatch({ type: 'update number', payload: 20 });
console.log('store >>', store.getState());
store.dispatch({ type: 'update members', payload: ['bob'] });
console.log('store >>', store.getState());
