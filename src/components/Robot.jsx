import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Robot = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/kuma_heavy_robot_r-9000s.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      const firstAnimation = Object.keys(actions)[0]
      actions[firstAnimation].play()
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="d08bcb9eee5d4ee7ba2cdda5726827dafbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  position={[-866.654, 1714.409, 8.214]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials['Material.002']}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <skinnedMesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_21.skeleton}
                    />
                    <group
                      name="Object_18"
                      position={[-34.199, -256.731, 114.388]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_20"
                      position={[-34.199, -256.731, 114.388]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="ArmLong037"
                  position={[-34.199, -256.73, 114.388]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="ArmLong000"
                  position={[-34.199, -256.73, 114.388]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/kuma_heavy_robot_r-9000s.glb')

export default Robot