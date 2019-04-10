import cart from './cart'
import cartState from '../state/cart'

describe('Cart', () => {
  let state
  beforeEach(() => {
    state = cartState
  })

  it('should be created', () => {
    expect(cart).to.be.ok
  })

  it('should add product to the list', () => {
    const newState = cart.add({ id: 1, name: 'fake name' })(state)
    expect(newState.productList).to.have.length(1)
    expect(newState.productList[0]).to.deep.equal({ id: 1, name: 'fake name' })
  })

  it('should remove product from the list', () => {
    const newProduct = { id: 1, name: 'fake name 1' }
    const anotherProduct = { id: 2, name: 'fake name 2' }
    const products = [newProduct, anotherProduct]
    const newState = products.reduce((add, product) => {
      return cart.add(product)(add)
    }, state)
    expect(newState.productList).to.have.length(2)
    const result = cart.remove(newProduct)(newState)
    expect(result.productList).to.have.length(1)
    expect(result.productList[0]).to.deep.equal({
      id: 2,
      name: 'fake name 2',
    })
  })
})
