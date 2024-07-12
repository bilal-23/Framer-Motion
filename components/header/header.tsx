import Link from "next/link"

import { Draggable } from "@/components/ui/draggable"
import Magnetic from "@/components/ui/magnetic"
import ThemeToggler from "@/components/theme/theme-toggler"

export function Header() {
  return (
    <div className="flex h-12 w-full justify-between gap-2 px-4 py-2 shadow-md">
      <Draggable>
        <Magnetic>
          <Link
            href={"/"}
            className="cursor-pointer rounded-lg py-2 text-2xl font-semibold tracking-[-2px] sm:px-4 betterhover:hover:bg-accent"
          >
            bilal
          </Link>
        </Magnetic>
      </Draggable>
      <div className="flex items-center gap-2">
        <Magnetic>
          <Draggable>
            <ThemeToggler />
          </Draggable>
        </Magnetic>
      </div>
    </div>
  )
}
