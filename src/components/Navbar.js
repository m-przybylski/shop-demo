import { h } from 'hyperapp'
import { location } from '@hyperapp/router'

const redirect = path => location.actions.go(path)
const className = (linkLocation, currentLocation) =>
  currentLocation !== linkLocation
    ? 'links__item'
    : 'links__item links__item--active'

const LinkItem = (cation, path, redirectTo, action) => (
  <li
    class={className(redirectTo, path)}
    onclick={() => {
      if (action !== undefined) {
        action()
      }
      redirect(redirectTo)
    }}
  >
    <a>{cation}</a>
  </li>
)

export const Navbar = ({ path, loadProducts }) => (
  <nav class="navigation">
    <h3 onclick={() => redirect('/')}>LOGO</h3>
    <ul class="links">
      {LinkItem('Home', path, '/', loadProducts)}
      {LinkItem('About', path, '/about')}
      {LinkItem('Contact', path, '/contact')}
      <li class={`${className('/search', path)} links__item--search`}>
        <i class="fas fa-search" />
      </li>
    </ul>
  </nav>
)
