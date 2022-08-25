import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, Environment, OrbitControls, Sphere } from '@react-three/drei'
import { pi, rand, range } from '../../utils/math'
import { MeshBasicMaterial, MeshStandardMaterial } from 'three'

const material = new MeshStandardMaterial({
  color: 'gray',
  roughness: 0,
  metalness: 1
})

export default function App() {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 10] }} shadows>
      <React.Suspense fallback={null}>
        <Environment preset="dawn" background resolution={1024 * 8} />
            <Sphere args={[1, 10, 10]} castShadow receiveShadow>
              <meshStandardMaterial color="gray" metalness={1} roughness={0} />
            </Sphere>
            {range(0, 9).map(i => i * 18).map(i => (
              range(0, 9).map(j => j * 18).map(j => (
                <Box args={[0.1, rand(4, 8), 0.1]} rotation={[i * pi / 180, 0, j * pi / 180]} key={`${i}-${j}`} material={material} castShadow receiveShadow />
              ))
            ))}
      </React.Suspense>
      <OrbitControls />
    </Canvas>
  )
}
