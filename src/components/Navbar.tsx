import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ModeToggle } from "@/components/ui/ThemeToggle";

export default async function Navbar() {
  return (
    <nav className="py-2 flex items-center justify-between transition-all duration-300">
      <h1 className="font-semibold hover:opacity-75 transition-hover cursor-pointer">
        <Link href="/">Logo</Link>
      </h1>
      <div className="space-x-2 flex items-center">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://github.com/SooditK.png"
                alt="@SooditK"
                className="h-12 w-12 rounded-full"
              />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <Link href="/">
              <DropdownMenuItem className="cursor-pointer">
                Account
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
