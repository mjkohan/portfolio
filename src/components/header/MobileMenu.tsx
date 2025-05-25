import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet, SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SocialIcons from "./SocialIcons"
import {navItems} from "@/constants";
import Logo from "@/components/header/Logo";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button  variant="default" size="lg" className="lg:hidden cursor-pointer">
          <Menu className="!h-5 !w-5 " />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-left"><Logo text="MJ.KohanKan"/></SheetTitle>
        </SheetHeader>
        <div className=" border-t-2 border-t-foreground p-4 flex flex-col gap-6">
          <nav >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <SheetClose asChild>
                    <Link
                        href={item.href}
                        className={`text-lg transition hover:text-primary ${
                            item.href === "#about" ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>

                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto pt-4 border-t">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-medium">Connect with me</h3>
              <SocialIcons className="flex gap-3" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}