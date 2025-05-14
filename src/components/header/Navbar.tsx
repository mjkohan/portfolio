import Logo from './Logo'
import NavMenu from './NavMenu'
import SocialIcons from './SocialIcons'
import {ModeToggle} from './ModeToggle'

export default function Navbar() {
    return (
        <nav className=" w-full bg-secondary text-secondary-foreground flex flex-nowrap border items-center  rounded-lg p-2 sm:p-4">

            <div className="flex  justify-between items-center w-full py-1.5 px-2 sm:py-3 sm:px-4">
                <Logo text="MJ.KohanKan" />
                <div className="hidden  lg:flex">
                    <NavMenu />
                </div>
                <div className="flex items-center gap-4 me-5">
                    <SocialIcons className="hidden md:flex gap-3" />

                </div>
            </div>

            <ModeToggle />
        </nav>
    )
}
