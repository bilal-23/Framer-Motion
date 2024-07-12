import Link from "next/link"

import { cn } from "@/lib/utils"

import { ArrowRightUp } from "./icons"

interface Props {
  href: string
  className?: string
}
export function TutorialLink({ href, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "flex items-center gap-1 text-sm text-muted-foreground transition-transform duration-300 hover:underline",
        className
      )}
    >
      Tutorial
      <ArrowRightUp className="size-4" />
    </Link>
  )
}
