import { aiListReviw } from "@/types/aiListReview";
import tesla from '@/.././public/tesla.png';
import openai from '@/.././public/openai.webp';
import gpt from '@/.././public/gpt3.png';
import siri from '@/.././public/siri.png';
import cortana from '@/.././public/cortana.png';
import alexa from "@/../public/alexa.png"
import bard from "@/../public/bard.png"
import watson from "@/../public/watson.png"
import DeepMind from "@/../public/DeepMind.png"
import Jarvis from "@/../public/Jarvis.png"


export const reviews:aiListReviw[] = [
    {
        name: "OpenAI",
        description: "OpenAI is an AI research lab focused on developing and promoting friendly AI for the benefit of humanity.",
        img: openai,
    },
    {
        name: "GPT-3",
        description: "GPT-3 (Generative Pre-trained Transformer 3) is a language model developed by OpenAI, capable of generating human-like text.",
        img: gpt,
    },
    {
        name: "GPT-4",
        description: "GPT-4 is an advanced version of GPT-3 with improved language understanding and capabilities, also developed by OpenAI.",
        img: gpt,
    },
    {
        name: "Siri",
        description: "Siri is Apple’s voice-controlled personal assistant, capable of performing tasks, answering questions, and providing recommendations.",
        img: siri
    },
    {
        name: "Cortana",
        description: "Cortana is Microsoft’s virtual assistant, designed to help with tasks, answer questions, and interact with Microsoft’s services.",
        img: cortana
    },
    {
        name: "Alexa",
        description: "Alexa is Amazon’s voice assistant that can control smart home devices, play music, set reminders, and provide information.",
        img: alexa
    },
    {
        name: "Bard",
        description: "Bard is Google’s conversational AI service, designed to generate creative and informative responses based on user input.",
        img: bard
    },
    {
        name: "Watson",
        description: "Watson is IBM’s AI system, known for its ability to analyze large amounts of data and provide insights across various fields.",
        img: watson
    },
    {
        name: "DeepMind",
        description: "DeepMind, a subsidiary of Alphabet Inc., is known for developing cutting-edge AI systems, such as the famous AlphaGo.",
        img: DeepMind
    },
    {
        name: "Jarvis",
        description: "Jarvis is the fictional AI assistant in the Marvel universe, created by Tony Stark to help with various tasks, including managing his home and armor.",
        img: Jarvis
    },
    {
        name: "Tesla Autopilot",
        description: "Tesla Autopilot is an advanced driver-assistance system by Tesla, utilizing AI to control driving tasks and assist with navigation.",
        img: tesla
    }
];