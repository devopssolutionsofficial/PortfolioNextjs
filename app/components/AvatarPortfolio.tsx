"use client"
import { MotionTransition } from './Transition-components'
import Image from 'next/image'

export default function AvatarPortfolio() {
  return (
    <MotionTransition position='bottom' className='bottom-0 left-0 hidden md:inline-block md:absolute'>

      <Image src="/avatar-works.png" alt='avartar portfolio' width={300} height={300} className='w-full' />
    </MotionTransition>
  )
}
