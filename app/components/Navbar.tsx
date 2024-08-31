"use client"
import { itemsNavbar } from '@/data'
import Link from 'next/link'
import React from 'react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { usePathname } from 'next/navigation'
import { MotionTransition } from './Transition-components'


export default function Navbar() {

    const path = usePathname()
    return (
        <MotionTransition position='right' className='fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10'>
            <nav className=''>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div className= {`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondaryButton ${path === item.link ? 'bg-secondaryButton' : ''}`} key={item.id}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className='flex items-center'><Link href={item.link}>{item.icon}</Link></TooltipTrigger>
                                    <TooltipContent>
                                        <p>{item.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    ))}
                </div>

            </nav>
        </MotionTransition>
    )
}
