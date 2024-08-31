import React from 'react'
import { MotionTransition } from './Transition-components'
import Image from 'next/image'

export default function AvatarServices() {
  return (
    <MotionTransition position='right' className='bottom-0 left-0 md:inline-block md:absolute hidden'>
        <Image src="/services.png" width={300} height={300} priority alt='services img' className='w-[350px] h-full'/>
    </MotionTransition>
  )
}
