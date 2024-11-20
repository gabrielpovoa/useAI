import { chatGPTTipsType } from '@/types/chatGPTTips'
import React from 'react'

export const ChatTip = ({ title, description, badge }: chatGPTTipsType) => {
    return (
        <div className={`relative max-w-5xl h-full rounded-md shadow-md border-white p-3 py-10 flex items-center justify-center flex-col gap-8 
            ${badge ? 'bg-[#2C5530]' : 'bg-orange/80'} hover:scale-105 transition-all duration-300 ease-in-out`}>
            <h3 className={`${badge ? 'text-white' : 'text-white'} absolute bg-oxfordBlue text-center w-56 h-20 flex items-center justify-center mx-auto p-3 rounded-md top-0 left-0 right-0 -mt-5 uppercase text-sm `}>{title}</h3>
            <p className={`${badge ? 'text-white' : 'text-darkBlue'} text-sm mt-8 text-center`}>{description}</p>
        </div>
    )
}
