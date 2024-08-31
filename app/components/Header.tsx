import React from 'react'
import { MotionTransition } from './Transition-components'
import Link from 'next/link'
import { socialNetworks } from '@/data'

export default function Header() {
    return (
        <MotionTransition position='bottom' className='absolute z-40 inline-block w-full top-5 md:top-10 '>
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                        <h1 className='my-3 text-4xl font-bold text-center md:text-left'>
                            Devops
                            <span className='text-secondaryButton'>
                                Solution
                            </span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (

                            <Link key={id} href={src} target='_blank' className='transition-all hover:text-secondaryButton'>
                                {logo}
                            </Link>

                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    )
}
