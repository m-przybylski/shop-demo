import { h } from 'hyperapp'

const view = productList => {
  const prodList =
    productList.length === 0 ? (
      <div class="cart__empty">Cart is empty</div>
    ) : (
      <ul>
        {productList.map(product => (
          <li class="cart-item">
            <span class="cart-item__ibu">{product.ibu}</span>
            <span class="cart-item__name">{product.name}</span>
          </li>
        ))}
      </ul>
    )
  const prodCount =
    productList.length !== 0 ? <span>( {productList.length} )</span> : null
  return (
    <div class="cart-layout">
      <section class="cart-header">
        <i class="far fa-address-book" />
        <span class="cart-header__caption">Contact</span>
        <p class="cart-header__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section class="cart-header">
        <i class="fas fa-shopping-cart" />
        <span class="cart-header__caption">Cart {prodCount}</span>
        <section class="cart">{prodList}</section>
      </section>
    </div>
  )
}

export const Cart = ({ state }) => view(state.productList)
