import { h } from 'hyperapp'

export const Spinner = () => {
  const spinnerStyle = {
    animation: 'spin 1s infinite linear',
  }
  return (
    <span style="font-size:5em">
      <i style={spinnerStyle} class="fas fa-circle-notch" />
    </span>
  )
}
