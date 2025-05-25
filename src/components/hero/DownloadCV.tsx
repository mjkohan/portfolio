import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export function DownloadCV() {
    return (
        <Link
            href="/MohammadJavadKohankan2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Button
                variant="outline"
                className="group cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                <span>[ Download my CV ]</span>
            </Button>
        </Link>
    )
}
