"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Introduction() {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width={800} height={800} alt="Profile pic" />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
                        <TypeAnimation sequence={[
                            "puedes programarlo",
                            1000,
                            "puedes optimizarlo",
                            1000,
                            "puedes implementarlo",
                            1000,
                            "puedes desarrollarlo",
                            1000
                        ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondaryButton"
                        />
                    </h1>

                    <p className="mx-auto mb-8 text-center md:text-start text-xl md:mx-0 md:mb-8"> Como desarrolladores web nos dedicamos a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.</p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">

                        <Link href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-white/50">
                            Ver productos
                        </Link>

                        <Link href="/contact" className="px-3 py-2 transition-all border-2 border-secondaryButton cursor-pointer text-md w-fit rounded-xl text-secondaryButton hover:shadow-lg hover:shadow-secondaryButton">
                            Contactanos
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
