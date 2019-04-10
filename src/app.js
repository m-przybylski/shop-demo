import { AboutView } from './views/about'
import { ProductView } from './views/product'
import { ProductsView } from './views/products'
import { ContactView } from './views/contact'
import { Navbar } from './components/Navbar'

import { h, app } from 'hyperapp'
import { location, Route } from '@hyperapp/router'

import state from './state'
import actions from './actions'

const appState = {
  ...state,
  location: location.state,
}

const appActions = {
  ...actions,
  location: location.actions,
}

let initialized = false

const view = (state, actions) => (
  <div>
    <Navbar
      path={state.location.pathname}
      loadProducts={actions.products.loadProducts}
    />
    <div class="router-outlet">
      <Route path="/about" render={AboutView} />
      <Route
        path="/"
        render={props => {
          if (!initialized) {
            actions.products.loadProducts()
            initialized = true
          }
          return ProductsView(props)
        }}
      />
      <Route
        path="/product-details/:productId"
        render={props => {
          if (!initialized) {
            actions.products.loadProducts()
            initialized = true
          }
          return ProductView(props)
        }}
      />
      <Route path="/contact" render={ContactView} />
    </div>
  </div>
)

export function bootstrap(routerElement) {
  const application = app(appState, appActions, view, routerElement)
  location.subscribe(application.location)

  // const router = new Router(path => {
  //   const navigate = id => router.navigate(id)
  //   while (routerElement.firstChild) {
  //     routerElement.removeChild(routerElement.firstChild)
  //   }

  //   switch (path) {
  //     case 'about':
  //       return AboutView()
  //     case 'home':
  //       // console.log(application)
  //       ProductsView({
  //         state: application.getState(),
  //         actions,
  //         navigate,
  //         container: routerElement,
  //       }).products.loadProducts()
  //       return
  //     case 'contact':
  //       const contact = new ContactView()
  //       contact.init(routerElement)
  //       return
  //     case path.indexOf('product-details') !== -1 ? path : '':
  //       const productId = path.replace('product-details/', '')
  //       console.log(application.getState())
  //       // const product = state.
  //       ProductView({
  //         state: application.getState(),
  //         actions,
  //         container: routerElement,
  //       })
  //       return
  //     default:
  //       ProductsView({
  //         state: application.getState(),
  //         actions,
  //         navigate,
  //         container: routerElement,
  //       }).products.loadProducts()
  //       return
  //   }
  // })
  //
  // return router
}
