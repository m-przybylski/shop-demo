import { h } from 'hyperapp'
import { Cart } from '../components/Cart'
import { Spinner } from '../components/Spinner'

const addButton = (cart, product, add) =>
  cart.productList.some(productInCart => productInCart.id === product.id) ? (
    <button class="product-content__add">Added</button>
  ) : (
    <button class="product-content__add" onclick={() => add(product)}>
      Add to Cart
    </button>
  )

const view = productId => (state, actions) => {
  const product = state.products.productList.find(
    product => productId === product.id
  )
  return (
    <div class="product-layout">
      <Cart state={state.cart} />
      {state.products.isLoading ? (
        <Spinner />
      ) : (
        <div class="product-details">
          <img class="product-details__image" src={product.image_url} />
          <div class="product-content">
            <div class="product-content__desc">
              <h2 class="product-content-name">{product.name}</h2>
              <p class="product-content-description">{product.description}</p>
            </div>
            {addButton(state.cart, product, actions.cart.add)}
          </div>
        </div>
      )}
    </div>
  )
}

export function ProductView({ match }) {
  return view(parseInt(match.params.productId, 10))
}
