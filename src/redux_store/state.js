import { createStore } from 'redux';
import {getProducts} from '../api_requests/requests';

const initialState = {
  cart: [],
  user: {},
  products: [],
  searchTerm: ''
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

    case 'search':
      return {
        ...state,
        searchTerm: action.payload
      }

    case 'cart_from_cookie':
      return {
        ...state,
        cart: action.payload
      }  
      
    case 'login':
      return {
        ...state,
        user: action.payload.user,
        cart: action.payload.cart
      }

    case 'logout':
      return {
        ...state,
        user: {}
      }

    default:
      return state;  
  }
}

export default createStore(reducer, initialState);