export default {
  loadProducts: () => (state, actions) => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(products => {
        actions.loadProductsSuccess(products)
      })
    return {
      ...state,
      isLoading: true,
    }
  },
  loadProductsSuccess: products => state => ({
    ...state,
    isLoading: false,
    productList: products,
  }),
}
