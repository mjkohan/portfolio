const navItems = [
    { label: 'About me', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
]

export default function NavMenu() {
    return (
        <ul className="flex gap-8">
            {navItems.map((item) => (
                <li key={item.href}>
                    <a href={item.href} className={` text-lg transition ${item.href === "#about" ? '' : ''}`}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}
