import { h } from 'hyperapp'

export const ProductItem = ({ name, description, image }) => (
  <div class="product">
    <img class="product__image" src={image} />
    <div class="product__details">
      <h2 class="product-name">{name}</h2>
      <p class="product-description">{description}</p>
    </div>
  </div>
)
