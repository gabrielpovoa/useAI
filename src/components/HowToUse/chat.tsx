import Image from 'next/image'
import Chat from '@/.././public/chat.webp';

export const ChatImage = () => {
  return (
    <Image 
        src={Chat}
        alt='ChatGPT Artificial inteligence'
        className='h-full object-cover rounded-md pointer-events-none'
    />
  )
}
