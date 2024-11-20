import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <footer className='p-6 flex flex-col gap-3 sm:gap-4 justify-between items-start bg-oxfordBlue'>
        <h2 className='text-white'>Made by <Link className='text-orange' href="https://joao-povoa-filho.vercel.app/" target='_blank'>João</Link> {date} </h2>
        <p className='text-white'>All this website were made based on <Link className='text-orange text-xs' href="https://chatgpt.com/" target='_blank'>Chat GPT</Link> prompt</p>
        <p className='text-white/60'>All rights reserved.</p>
    </footer>
  )
}
