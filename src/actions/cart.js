export default {
  add: product => state => ({
    productList: state.productList.concat(product),
  }),
  remove: product => state => ({
    productList: state.productList.filter(
      productItem => productItem !== product
    ),
  }),
}
