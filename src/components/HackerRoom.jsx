import React, { useRef, useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/old_computer.glb')
  const screenTexture = useTexture('/textures/desk/matrix.jpg')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          {/* Screen Mesh */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_18.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_19.geometry}
            material={materials.DefaultMaterial}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_20.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_21.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_22.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_23.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_24.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_25.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_26.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_27.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_28.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_29.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_30.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_31.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_32.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_33.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_34.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_35.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_36.geometry}
            material={materials.DefaultMaterial}
            position={[66.262, 0, 0]}
            rotation={[-Math.PI / 2, 0, -0.184]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/old_computer.glb')

export default HackerRoom