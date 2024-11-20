import React from 'react';

const SpiralAI = () => {
    const aiNames = [
        "OpenAI", "GPT-3","GPT-4", "Siri", "Cortana", "Alexa", "Bard", "Watson", "DeepMind", "Jarvis", "RoboCop",
        "Assistant", "Eliza", "Clara", "Sophia", "Tesla Autopilot"
    ];

    return (
        <div className="flex items-end justify-end gap-3 flex-wrap">
            {aiNames.map((item, index) => (
                <div key={index} className='upperase bg-darkBlue p-3 rounded-md shadow-md hover:bg-orange hover:scale-105 transition-all duration-300 ease-in-out'>{item}</div>
            ))}
        </div>
    );
};

export default SpiralAI;
