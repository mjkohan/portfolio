"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button className={'cursor-pointer h-8 sm:h-12 hover:bg-transparent' } variant={'ghost'} onClick={toggleTheme}>
            <Sun className=" text-yellow-600 !w-6 !h-6 sm:!w-8 sm:!h-8  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="text-yellow-600 !w-6 !h-6 sm:!w-8 sm:!h-8 absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
