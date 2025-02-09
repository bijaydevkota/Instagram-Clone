import { ChevronDown, Heart, MessageCircleMore } from 'lucide-react'
import React from 'react'

export default function MobileNavBar() {
  return (
    <div className='md:hidden flex justify-between px-4 mt-8'>
        <div className='flex items-center'>
        <img height={140} width={140} src="/insta.png" alt="" />
        <ChevronDown />
        </div>

        <div className='flex gap-10'>
            <Heart size={30}/>
            <MessageCircleMore size={30}/>
        </div>
    </div>
  )
}
