import {CodeXml} from "lucide-react";


type LogoProps = {
    text: string
}

export default function Logo({ text }: LogoProps) {
    return (
        <a href="/" className="flex items-center">
            <CodeXml className={'text-green-600 !w-6 !h-6 sm:!w-12 sm:!h-12  font-bold '} />
            <span className=" text-lg sm:text-3xl ml-2">{text}</span>
        </a>
    )
}
