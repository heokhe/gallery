const SCALE = 10

export function setupCanvas() {
  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width *= SCALE
  canvas.height *= SCALE
  canvas.style.width = 'min(100vw, 100vh)'
  canvas.style.height = 'min(100vw, 100vh)'
  ctx.scale(SCALE, SCALE)

  return ctx
}
