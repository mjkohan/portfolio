import {navItems} from "@/constants";
import Link from "next/link";
export default function NavMenu({place}:{place:string}) {
    return (
        <ul className="flex gap-8">
            {navItems.map((item) => (
                <li key={item.href+ "-" + place}>
                    <Link href={item.href} className={ `cursor-pointer
                     ${(place==='header') ? '!hover:text-white' : ''}
                     ${(place==='header' && item.href==='#about') ? '!text-white' : ''}

                     hover:text-foreground text-gray-400 text-lg transition `}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
