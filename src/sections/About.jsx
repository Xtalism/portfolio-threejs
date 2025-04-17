import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { OrbitControls } from "@react-three/drei";
import TechStack from "../components/TechStack.jsx";
import Keyboard from "../components/Keyboard.jsx";
import { Environment } from "@react-three/drei";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const globeRef = useRef();

    const handleCopy = () => {
        navigator.clipboard.writeText('manuel.pina.olivas@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (globeRef.current) {
                const currentRotation = globeRef.current.pointOfView();
                globeRef.current.pointOfView({
                    lat: currentRotation.lat,
                    lng: currentRotation.lng + 1,
                    altitude: currentRotation.altitude,
                });
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='c-space my-20' id="about">
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/programmer.png' alt='Grid 1'
                            className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className="grid-headtext">Hi, I'm Manuel</p>
                            <p className="grid-subtext">
                                I'm a Mechatronics Engineer with a passion for robotics, electronics, and software development.
                                I create innovative hardware and software solutions for the web and beyond.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="interactive-container">
                            <Canvas>
                                <Suspense fallback={<CanvasLoader />}>
                                    <directionalLight
                                        position={[5, 5, 5]}
                                        intensity={2.5}
                                        castShadow
                                        shadow-mapSize-width={2048}
                                        shadow-mapSize-height={2048}
                                        shadow-camera-far={15}
                                        shadow-camera-left={-10}
                                        shadow-camera-right={10}
                                        shadow-camera-top={10}
                                        shadow-camera-bottom={-10}
                                    />
                                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI}
                                        minAzimuthAngle={-Math.PI / 3} maxAzimuthAngle={Math.PI / 3} enableRotate={true} />
                                    <Suspense fallback={<CanvasLoader />} />
                                    <Environment preset="park" />
                                    <TechStack position-y={0.1} scale={2.4} rotation={[Math.PI / 2, 0, 0]} />
                                </Suspense>
                            </Canvas>
                        </div>
                        {/* <img src="/assets/grid2.png" alt="Grid 2"
                            className="w-full sm:h-[276px] h-fit object-contain" /> */}
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                My expertise spans Full Stack development, low-level programming, and robotics.
                                I have hands-on experience with technologies like React, Node.js, Python, and C/C++.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex 
                        justify-center items-center interactive-container">
                            <Globe
                                ref={globeRef}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                // globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
                                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I collaborate globally.
                            </p>
                            <p className="grid-subtext">
                                Working with teams and clients worldwide, I am driven by a passion for technology
                                and its ability to transform lives for the better.
                            </p>
                            <a href='#contact' className='w-fit'>
                                <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container h-[400px] md:h-[500px]">
                        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
                            <Suspense fallback={<CanvasLoader />}>
                                <ambientLight intensity={0.6} />
                                <directionalLight
                                    position={[5, 5, 5]}
                                    intensity={2.5}
                                    castShadow
                                    shadow-mapSize-width={2048}
                                    shadow-mapSize-height={2048}
                                    shadow-camera-far={15}
                                    shadow-camera-left={-10}
                                    shadow-camera-right={10}
                                    shadow-camera-top={10}
                                    shadow-camera-bottom={-10}
                                />
                                <Environment preset="lobby" />
                                <OrbitControls
                                    enableZoom={false}
                                    maxPolarAngle={Math.PI / 2}
                                    minPolarAngle={Math.PI / 3}
                                    enableRotate={false}
                                />
                                <Keyboard
                                    position-y={0}
                                    scale={0.028}
                                    rotation={[Math.PI / 8, 0, 0]}
                                />
                            </Suspense>
                        </Canvas>
                        {/* <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" /> */}
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I love solving problems through code and
                                physical problems through hardware. I enjoy the challenge of creating
                                efficient and effective solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] 
                        sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-base md:text-sm font-medium text-gray_gradient text-white">
                                    manuel.pina.olivas@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;