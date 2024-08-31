import Avatar from '@/app/components/Avatar'
import ContainerPage from '@/app/components/Container'
import CounterServices from '@/app/components/Counter-services'
import Timeline from '@/app/components/Time-line'
import TransitionPage from '@/app/components/TransitionPage'
import React from 'react'

export default function page() {
    return (
        <>
            <TransitionPage />

            <ContainerPage>
                <Avatar />
                <h1 className='text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10'>Toda nuestra {' '}

                    <span className='font-bold text-secondaryButton'>trayectoria profecional</span>
                </h1>

                <CounterServices />
                <Timeline />
            </ContainerPage>
        </>
    )
}
