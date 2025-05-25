import {navItems} from "@/constants";


export default function NavMenu() {
    return (
        <ul className="flex gap-8">
            {navItems.map((item) => (
                <li key={item.href}>
                    <a href={item.href} className={` text-lg transition ${item.href === "#about" ? '' : '!text-gray-400'}`}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}
