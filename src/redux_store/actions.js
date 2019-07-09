
const add_product = (product) => {
  return {
    type: 'add_product',
    payload: product
  }
}

const remove_product = (id) => {
  return {
    type: 'remove_product',
    payload: id
  }
}

const login = (user) => {
  return {
    type: 'login',
    payload: user
  }
}

const logout = () => {
  return {
    type: 'logout'
  }
}

const update_products = (products) => {
  return {
    type: 'update_products',
    payload: products
  }
}

export {
  add_product,
  remove_product,
  login,
  logout,
  update_products
}