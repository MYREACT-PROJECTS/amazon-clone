export const initialState = {
  basket: [],
};

export const productReducer = (state, action) => {
console.log(action);
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_PRODUCT":
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
};

