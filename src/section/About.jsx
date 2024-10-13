import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { color } from 'three/webgpu'

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('lequanghuy2108@gmail.com')

        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] object-contain' />
                        <div>
                            <p className='text-white'>Hi i'm Quang Huy</p>
                            <p className="grid-subtext">
                                With 12 experiences, i have honed my skills constantly on the grounds that i can now proudly say i'm an expert in front-end
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] object-contain' />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in JavaScript with a focus on React ecosystems.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className="grid-container">
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones.
                            </p>
                            <p className='grid-subtext'>
                                I'm based in VietNam, with remote work availavle.
                            </p>
                        </div>
                        <Button isBeam name='Contact Me' containerClass='mt-10 w-full' />
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[276px] h-fit object container' />
                        <div>
                            <p className='grid-headtext'>
                                My Passion for Coding
                            </p>
                            <p className='grid-subtext'>
                                I love solving problems and building things through code.
                                Coding isn't just my profession - it it my passion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[200px] sm:h-[276px] h-fit object-cover sm:object-top' />

                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact Me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className='lg:text-xl md:text-xl font-medium text-gray_gradient'>lequanghuy2108@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About