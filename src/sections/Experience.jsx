import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { workExperiences } from '../constants/index.js';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import Robot from '../components/Robot.jsx';

const Experience = () => {
    return (
        <section className='c-space my-20'>
            <div className='w-full text-white-600'>
                <h3 className='head-text'>My work experience</h3>
                <div className='work-container'>
                    <div className='work-canvas'>
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15}
                                penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false}
                                maxPolarAngle={Math.PI / 2} enableRotate={false} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Robot position-y={0.5} scale={0.0012} rotation={[0, Math.PI / 2, 0]} />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className='work-content'>
                        <div className='sm:py-100 py-5 sm:px-5 px-2.5'>
                            {workExperiences.map(({ id, name, pos, duration, icon,
                                title, animation }, index) => (
                                <div key={id} className='work-content_container
                                group'>
                                    <div className='flex f lex-col h-full
                                    justify-start items-center py-2'>
                                        <div className='work-content_logo'>
                                            <img src={icon} alt='logo'
                                                className='w-full h-full' />
                                        </div>
                                        <div className='work-content' />
                                    </div>
                                    <div className='sm:p-5 px-2.5 py-5'>
                                        <p className='font-bold text-white-800'>
                                            {name}
                                        </p>
                                        <p className='text-sm mb-5'>
                                            {pos} -- {duration}
                                        </p>
                                        <p className='group-hover:text-white transition
                                        easte-in-out duration-500'>
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience