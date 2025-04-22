import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
// import Target from '../components/Target.jsx';
// import ReactLogo from '../components/ReactLogo.jsx';
// import Cube from '../components/Cube.jsx';
// import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
import { Environment } from '@react-three/drei';

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen border-blue-500 w-full  flex flex-col relative' id="home">
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                Hi, I'm Manuel <span className='waving-robot'>🤖</span>
            </p>
            <p className='hero_tag text-gray_gradient'>
                Finding Solutions to any Problem.
            </p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            {/* <Leva /> */}
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position={[0, 0, 23]}/>
                <HeroCamera>
                    <HackerRoom 
                        // scale={0.07} 
                        // position={[0, 0, 0]} 
                        // rotation={[0, 280, 0]}
                        position={sizes.deskPosition} 
                        rotation={[0, 0, 0.0]}
                        scale={sizes.deskScale}
                    />
                </HeroCamera>
                <group>
                    {/* <Target position={sizes.targetPosition}/> */}
                    {/* <ReactLogo position={sizes.reactLogoPosition}/> */}
                    {/* <Cube position={sizes.cubePosition}/> */}
                    {/* <Rings position={sizes.ringPosition}/> */}
                </group>
                {/* <ambientLight intensity={1.5}/> */}
                {/* <directionalLight position={[10, 10, 10]} intensity={0.5}/> */}
                <Environment preset="lobby" />
                </Suspense>
            </Canvas>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#about' className='w-fit'>
                    <Button name="Let's work together" isBeam container='sm:w-fit w-full sm:min-w-96'></Button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero