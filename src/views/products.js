import { h } from 'hyperapp'
import { ProductItem } from '../components/ProductItem'
import { Spinner } from '../components/Spinner'
import { Cart } from '../components/Cart'
import { Link } from '@hyperapp/router'

const renderProducts = productList =>
  productList.map(product => (
    <Link to={`/product-details/${product.id}`}>
      <ProductItem
        name={product.name}
        description={product.description}
        image={product.image_url}
      />
    </Link>
  ))

const view = state => {
  return (
    <div class="products-layout">
      <Cart state={state.cart} />
      <div class="products-list">
        {state.products.isLoading ? (
          <Spinner />
        ) : (
          renderProducts(state.products.productList)
        )}
      </div>
    </div>
  )
}

export function ProductsView({ match, location }) {
  return view
}
