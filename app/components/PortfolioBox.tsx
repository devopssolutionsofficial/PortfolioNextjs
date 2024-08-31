import { Github, LucideView } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PortfolioProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}
export default function PortfolioBox(props: PortfolioProps) {
    const { data } = props
    const { id, title, image, urlGithub, urlDemo } = data || {}
    return (
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">{title}</h3>

            <Image src={image} alt="Image projects" width={300} height={200} objectFit="cover" className="w-full md:w-[200px] rounded-2xl h-auto" />

            <div className="flex gap-5 mt-5">

                <Link href={urlGithub} target="_blank" className="p-2 transition rounded-lg bg-slate-700 hover:bg-slate-500/80">Github</Link>

                <Link href={urlDemo} target="_blank" className="p-2 transition rounded-lg bg-secondaryButton/80 hover:bg-secondaryButton/100">DemoLive</Link>
            </div>
        </div>
    )
}
