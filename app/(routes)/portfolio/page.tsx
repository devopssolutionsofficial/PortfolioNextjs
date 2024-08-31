import AvatarPortfolio from '@/app/components/AvatarPortfolio'
import CircleImage from '@/app/components/circle-image'
import ContainerPage from '@/app/components/Container'
import PortfolioBox from '@/app/components/PortfolioBox'
import TransitionPage from '@/app/components/TransitionPage'
import { dataPortfolio } from '@/data'
import React from 'react'

export default function PortfolioPage() {
  return (
    <ContainerPage>
      
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />

      <div className="flex flex-col justify-center h-full">
        <h1 className='text-2xl leading-tight text-center md:text-4xl md:mb-5'>Ultimos {' '}
          <span className='text-secondaryButton font-bold'>trabajos realizados</span>
        </h1>

        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">

          {dataPortfolio.map((data) => (

            <PortfolioBox key={data.id} data={data}/>
          ))}

        </div>

      </div>
    </ContainerPage>
  )
}
