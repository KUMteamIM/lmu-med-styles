import './fonts/roboto.css'
import './global.scss'
import './tables.scss'
import './buttons.scss'
import './forms.scss'

function buildButtonColors() {
  const colors = ['grassgreen', 'orange', 'gold', 'sel-red', 'sel-light-gray', 'sel-gray', 'sel-dark-gray', 'sel-distinct']
  const target = document.getElementById('button-colors')
  colors.forEach(btnColor => {
    const buttonLayer = document.createElement('tr')
    buttonLayer.innerHTML = `<td>${btnColor}</td><td><button class="button-lg ${btnColor}">${btnColor}</button></td><td><button class="button-lg ${btnColor}-invers">${btnColor}-invers</button></td>`
    target.appendChild(buttonLayer)
  })
}

window.onload = buildButtonColors
