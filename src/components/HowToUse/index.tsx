import React from 'react'
import { ChatImage } from './chat'

export const HowToUse = () => {
    return (
        <section className='p-6  flex flex-col lg:flex-row xl:flex-row gap-6 sm:gap-8 justify-between items-center bg-oxfordBlue/90'>

            <div className=' text-white w-full'>
                <ChatImage />
            </div>
            <div className="text-white">
                <h2 className='text-lg sm:text-3xl font-bold mb-5 uppercase w-full'>What is ChatGPT? Discover How This Friendly Robot Can Help You!</h2>
                <div className='flex flex-col gap-3 w-full'>
                    <p className='text-sm sm:text-lg'>ChatGPT is like a super-smart robot friend that lives on your computer or phone. It can talk to you, answer your questions, help you with homework, tell you fun stories, and even play games!</p>
                    <p className='text-sm sm:text-lg'>It’s like having a conversation with a person, but instead, you're talking to a robot that knows a lot of things. You can ask it anything, like “Why is the sky blue?” or “Can you tell me a funny joke?” ChatGPT will try its best to give you a cool answer.</p>
                    <p className='text-sm sm:text-lg'>It’s super helpful when you need help learning something new, and it’s also great when you want to have fun or be creative. ChatGPT doesn't have feelings like humans, but it’s really good at understanding what you want to know and can talk with you about almost anything!</p>
                </div>
            </div>
        </section>
    )
}
