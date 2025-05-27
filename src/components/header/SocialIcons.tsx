import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

type Props = {
    className?: string;
};

export default function SocialIcons({ className = '' }: Props) {
    const icons = [
        { href: 'www.linkedin.com/in/mohammadjavad-kohankan-78671b20b', Icon: Linkedin },
        { href: 'https://github.com/mjkohan', Icon: Github },
    ];

    return (
        <div className={className}>
            {icons.map(({ href, Icon }) => (
                <Link href={href} key={href + className} target="_blank" rel="noreferrer">
                    <Icon className="w-6 h-6" />
                </Link>
            ))}
        </div>
    );
}
