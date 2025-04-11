import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

const Target = (props) => {
  const targeRef = useRef();
  const { scene } = useGLTF('link')

  return (
    <mesh {...props} ref={targeRef}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Target