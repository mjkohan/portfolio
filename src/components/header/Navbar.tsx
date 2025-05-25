import Logo from "./Logo"
import NavMenu from "./NavMenu"
import SocialIcons from "./SocialIcons"
import { ModeToggle } from "./ModeToggle"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
    return (
        <nav
            className="w-full secondary-bg text-secondary-foreground flex flex-nowrap border items-center rounded-lg p-2 sm:p-3 md:p-4 lg:p-5">

            <div
                className="flex justify-between items-center w-full py-0.5 px-2 sm:py-1 sm:px-3 md:py-1.5 md:px-4 lg:py-2 lg:px-6">
                <Logo text="MJ.KohanKan"/>
                <div className="hidden xl:flex">
                    <NavMenu/>
                </div>

                <SocialIcons className="hidden md:flex gap-3"/>
            </div>

            <div className="flex items-center gap-2">
                <MobileMenu />
                <ModeToggle/>
            </div>
        </nav>
    )
}
