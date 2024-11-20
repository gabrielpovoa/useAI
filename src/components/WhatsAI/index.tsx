import React from 'react'
import SpiralAI from '../SpiralAI'

export const WhatsAI = () => {

    return <>
        <section className='p-6 flex flex-col gap-6 sm:gap-8 lg:flex-row xl:flex-row justify-between bg-oxfordBlue'>
            <div className='flex flex-col gap-2 text-white'>
                <h2 className='text-lg sm:text-3xl font-bold mb-5 uppercase'>What's an AI?</h2>
                <p className='text-sm sm:text-lg'>AI (Artificial Intelligence) refers to the simulation of human intelligence processes by machines, especially computer systems. It involves creating algorithms, models, and systems that enable machines to perform tasks that typically require human intelligence, such as problem-solving, learning, reasoning, understanding language, and making decisions.</p>
            </div>
            <div className=' text-white w-full'>
                <SpiralAI />
            </div>
        </section>
    </>
}
