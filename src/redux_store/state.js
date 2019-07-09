import { createStore } from 'redux';

const initialState = {
  cart: [],
  user: {},
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_product':
      return {
        ...state,
        cart: state.cart.concat(action.payload)
      }

    case 'remove_product':
      return {
        ...state,
        cart: state.cart.filter(product => product.id != action.payload)
      }

    case 'update_products':
      return {
        ...state,
        products: action.payload
      }
      
    case 'login':
      break;

    case 'logout':
      break;
  }
}

export default createStore(reducer, initialState);