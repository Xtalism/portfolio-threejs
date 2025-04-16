import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TechStack = (props) => {
  const { nodes, materials } = useGLTF('/models/amiga_floppy_disk.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials['01___Default']}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/amiga_floppy_disk.glb')

export default TechStack;