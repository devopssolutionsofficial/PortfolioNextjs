"use client"
import React from 'react'
import { MotionTransition } from './Transition-components'
import Image from 'next/image'

export default function Avatar() {
    return (
        <MotionTransition position='bottom' className='bottom-0 right-0 hidden md:inline-block md:absolute'>
            <Image src="/avatar-1.png" width={350} height={350} alt='avatar image' className='w-full h-full'/>
        </MotionTransition>
    )
}
