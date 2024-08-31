"use client"

import Image from "next/image";

export default function CircleImage() {
  return (
    <div className="bottom-0 right-0 hidden md:block md:absolute">
        <Image src="/circles.png" width={200} height={200} alt="circle" className="w-full h-full"/>
    </div>
  )
}
