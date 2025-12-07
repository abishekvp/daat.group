import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

const FloatingCrystal = () => {
  const crystalRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    crystalRef.current.rotation.x = t * 0.2
    crystalRef.current.rotation.y = t * 0.3
    crystalRef.current.position.y = Math.sin(t * 0.5) * 0.2
  })

  return (
    <Sphere args={[1.5, 64, 64]} ref={crystalRef} position={[2, 0, 0]}>
      <MeshDistortMaterial
        color="#00f3ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

export default FloatingCrystal
