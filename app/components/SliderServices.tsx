"use client"

import { serviceData } from "@/data"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


export default function SliderServices() {

    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                798: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide className="" key={index}>
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondaryButton border-2">

                        <div className="mb-4 text-4xl text-secondaryButton">{item.icon}</div>
                        <div className="mb-4 text-lg">
                            <h3>{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                            </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
