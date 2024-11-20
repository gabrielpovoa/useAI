import React from 'react'
import { PromptExample } from '../PromptExample'

export const UsePrompt = () => {
    return (
        <section className='p-6 flex flex-col gap-6 sm:gap-8 lg:flex-row xl:flex-row justify-between bg-oxfordBlue/90'>
            <div className='flex flex-col gap-2 text-white'>
                <h2 className='text-lg sm:text-3xl font-bold mb-5 uppercase'>Examples of Prompts</h2>
            </div>
            <div className=' text-white w-full'>
                <PromptExample />
            </div>
        </section>
    )
}
