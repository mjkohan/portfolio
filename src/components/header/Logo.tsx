import {CodeXml} from "lucide-react";


type LogoProps = {
    text: string
}

export default function Logo({ text }: LogoProps) {
    return (
        <a href="/" className="flex items-center">
            <CodeXml className={'text-green-300 !w-6 !h-6 sm:!w-8 sm:!h-8 md:!w-10 md:!h-10 lg:!w-12 lg:!h-12  font-bold '} />
            <span className=" text-lg sm:text-xl md:text-2xl lg:text-3xl ml-2">{text}</span>
        </a>
    )
}
