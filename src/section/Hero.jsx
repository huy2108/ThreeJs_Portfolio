import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Ring } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'


const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full flex flex-col sm:mt-36 mt-20 c-space gap-3' >
                <p className='sm:text-3xl text-2xl font-medium text-center font-generalsans text-white'>
                    Hi my name is Quang Huy
                    <span className='mx-1 waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>Building Products & Brand</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                            />
                        </HeroCamera>


                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>


                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} />

                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 right-0 left-0 z-10 c-space'>
                <a href="#contact" className='w-fit'>
                    <Button name="Let's work together" isBeam containerClass="w-full sm:w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero