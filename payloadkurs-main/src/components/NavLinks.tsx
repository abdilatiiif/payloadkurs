import Link from 'next/link'
import { Heart, Menu, User } from 'lucide-react'
import Image from 'next/image'
import logo from '/Users/abdilatif/Desktop/web/prosjekter/payloadkurs/payloadkurs-main/src/lib/carlogo.png'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu'
import SearchBar from './SearchBar'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet'

function NavLinks() {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden min-[778px]:flex justify-between items-center p-4 shadow-orange-300 text-white">
        <Link href="/">
          <Image
            className="rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
            src={logo}
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className=" ml-5 space-x-5">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="hover:border-b-2 border-orange-400" href="/cars">
                  Cars
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="hover:border-b-2 border-orange-400" href="/feed">
                  Feed
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="hover:border-b-2 border-orange-400" href="/explore">
                  Explore
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <SearchBar />

        <div className="flex space-x-4 items-center">
          <Heart className="text-red-500 hover:text-red-600 cursor-pointer hover:scale-115 transition-transform duration-200" />
          <User className=" cursor-pointer hover:text-green-800 text-green-300 hover:scale-115 transition-transform duration-200" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger className="absolute top-0 right-0 m-4 hidden max-[778px]:block">
          {' '}
          <Menu size={50} />{' '}
        </SheetTrigger>

        <SheetContent className="w-[350px] sm:w-[540px]">
          <div className="flex justify-between space-x-10 py-5 ml-5">
            <Heart className="text-red-500 hover:text-red-600 cursor-pointer transition-colors duration-200 " />
            <User className=" hover:text-primary cursor-pointer transition-colors duration-200" />
          </div>

          <SheetHeader>
            <NavigationMenu className="text-xl">
              <NavigationMenuList className="flex flex-col space-y-4 items-center justify-center">
                <NavigationMenuItem className="text-center">
                  <NavigationMenuLink asChild>
                    <Link href="/cars">Cars</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/feed">Feed</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/explore">Explore</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <SearchBar />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
export default NavLinks
