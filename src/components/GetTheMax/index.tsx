import { chatGPTTips } from '@/data/ChatTips'
import { Brain } from 'lucide-react'
import React from 'react'
import { ChatTip } from './chatTip'

export const GetTheMax = () => {
    return (
        <section className='p-6 flex flex-col gap-6 sm:gap-8 justify-between items-start bg-oxfordBlue'>
            <div className="text-white">
                <h2 className='text-lg sm:text-3xl font-bold mb-5 uppercase w-full flex items-start gap-3'>Use Chat GPT like a pro <Brain /></h2>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 items-center justify-center mx-auto'>
                    {chatGPTTips.map((item, index) => (
                        <ChatTip
                            key={index}
                            title={item.title}
                            description={item.description}
                            badge={item.badge}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
