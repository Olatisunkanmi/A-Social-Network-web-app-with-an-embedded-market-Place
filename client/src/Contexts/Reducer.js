export const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "INCREASE_LIKES":
      const increaseLike = state.product.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, likes: item.likes + 1 };
        }
        return item;
      });
      return { ...state, product: increaseLike };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.name !== action.payload.name),
      };
    default:
      break;
  }
};
