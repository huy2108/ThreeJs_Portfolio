import React from 'react'

const About = () => {
    return (
        <section className='c-space my-20 border border-red-500'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] object-contain border border-red-500' />
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
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in JavaScript with a focus on React ecosystems.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className="grid-container">
                        <div className='rounded-3xl w-full sm:w-[326px] h-fit flex justify-center items-center'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About