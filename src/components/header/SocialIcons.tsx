import { Linkedin, Github } from "lucide-react";

type Props = {
    className?: string;
};

export default function SocialIcons({ className = '' }: Props) {
    const icons = [
        { href: 'https://linkedin.com', Icon: Linkedin },
        { href: 'https://github.com', Icon: Github },
    ];

    return (
        <div className={className}>
            {icons.map(({ href, Icon }) => (
                <a href={href} key={href} target="_blank" rel="noreferrer">
                    <Icon className="w-6 h-6" /> {/* You can adjust the size here */}
                </a>
            ))}
        </div>
    );
}
