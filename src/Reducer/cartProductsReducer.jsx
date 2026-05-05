export const cartProductsReducer = (state, { type, provider }) => {
  switch (type) {
    case "get":
        return state;
    case "add": 
        return state.some(e => e.id === provider.id) ? state : [...state, {...provider, quantity: 1}];
    case "remove":
        return state.filter(e => e.id !== provider);
  }
};
