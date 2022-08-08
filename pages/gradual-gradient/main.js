import { setupCanvas } from '../../utils/canvas'
import { lerpColor } from '../../utils/colors'

const ctx = setupCanvas()

function renderColumn(x, width, rows, topColor, bottomColor) {
  for (let i = 0; i < rows; i++) {
    ctx.fillStyle = lerpColor(topColor, bottomColor, i / (rows - 1))
    ctx.fillRect(x, 1024 / rows * i - 1, width + 1, 1024 / rows + 1)
  }
}

function render() {
  const n = 45
  for (let i = 0; i < n; i++) {
    renderColumn(1024 / n * i, 1024 / n, Math.abs(i - Math.floor(n / 2)) + 3, '#956dbd', '#33288a')
  }
}

render()
