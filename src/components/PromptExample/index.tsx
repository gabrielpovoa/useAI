import React from 'react'

export const PromptExample = () => {

    return <>
        <div className="w-full">
            <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
      bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="top mb-2 flex">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="ml-2 h-3 w-3 bg-orange rounded-full"></div>
                    <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-4 flex">
                    <span className="text-green-400">user:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        Act as an interviewer and ask me the interview questions for the [position]. Ask me a question and wait for my answer. Then ask another question. End the interview when I say ‘thank you for your time’. Provide feedback on how I performed.
                    </p>
                </div>
                <div className="mt-4 flex">
                    <span className="text-green-400">chat:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        Sure! I’ll act as an interviewer for your position. I’ll ask questions, and you can respond. Let’s start the interview!
                    </p>
                </div>
                <div className="mt-4 flex">
                    <span className="text-green-400">chat:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        Question 1: Can you please tell me a little about yourself and why you’re interested in this position?</p>
                </div>
            </div>
        </div>

    </>
}
