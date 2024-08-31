"use client"
import { dataCounter } from "@/data"
import CountUp from "react-countup"

export default function CounterServices() {
    return (

        //! Arreglar resposive linea 9 y 12
        <div className=" flex flex-wrap md:grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-col-3 md:gap-4 mx-auto items-center justify-center w-fit md:max-w-3xl my-8 ">
            {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id}>
                    <div className={`${lineRight && 'px-4 border w-fit flex items-center mx-auto gap-4 border-transparent '}`}>

                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondaryButton">
                            + <CountUp end={endCounter} start={0} duration={5} />
                        </p>

                        <p className="text-xs uppercase max-w-[100px]">{text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
