import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'


const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    const x = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        scaleX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        scaleY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        scaleZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
    })

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
                <Leva />
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HackerRoom
                            scale={isMobile ? 0.07 : 0.1}
                            position={[2, -8, 2]}
                            rotation={[0, -Math.PI, 0]}
                        />
                        <ambientLight intensity={1.5} />

                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero