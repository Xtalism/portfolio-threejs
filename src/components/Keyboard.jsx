import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Keyboard = (props) => {
  const { nodes, materials } = useGLTF('/models/cartoon_mini_keyboard.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LP_keyboard_0.geometry}
          material={materials.keyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LP_outline_0.geometry}
          material={materials.outline}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cartoon_mini_keyboard.glb')

export default Keyboard