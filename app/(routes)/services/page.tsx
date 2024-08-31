import AvatarServices from '@/app/components/Avatar-services'
import CircleImage from '@/app/components/circle-image'
import SliderServices from '@/app/components/SliderServices'
import TransitionPage from '@/app/components/TransitionPage'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto grid-cols-1 lg:grid-cols-2 ">

        <div className="flex flex-col items-center mx-auto max-w-[450px] mt-20 md:mt-0 p-4 md:p-0">

          <h1 className='text-2xl leading-tight text-center md:text-left md:text-4xl mt-6 md:mt-20'>Nuestros {' '}
            <span className='font-bold text-secondaryButton'>servicios</span>
          </h1>

          <p className='my-6 text-base md:text-xl text-gray-300'>Ofrecemos servicios de desarrollo web full-stack especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de nuestros clientes y mejoran su presencia en la web.
          </p>

          <Link href="/contact" className=' transition p-3 rounded-lg bg-secondaryButton hover:bg-secondaryButton/65'>Contactanos</Link>

        </div>
        {/* Slider */}
        <div className="mb-12">
          <SliderServices />
        </div>

      </div>
    </>
  )
}
