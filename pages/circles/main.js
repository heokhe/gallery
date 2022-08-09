import { setupCanvas } from '../../utils/canvas'
import { pi, rand } from '../../utils/math'

const ctx = setupCanvas()

function background() {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, 1024, 1024)
}

function renderCircles(color, d) {
  ctx.lineWidth = 1
  ctx.strokeStyle = color
  ctx.lineCap = 'round'
  for (let i = 0; i <= 512 * Math.SQRT2; i += d) {
    ctx.beginPath()
    const startAngle = rand(0, 2 * pi)
    const angle = rand(0, pi)
    const v = 0
    ctx.arc(rand(512 - v, 512 + v), rand(512 - v, 512 + v), i, startAngle, startAngle + angle)
    ctx.stroke()
  }
}

const n = 50
function render() {
  background()
  for (let i = 1; i <= n; i++) {
    renderCircles(`rgba(255, 255, 255, 0.3)`, rand(4, 40))
  }
}

render()
