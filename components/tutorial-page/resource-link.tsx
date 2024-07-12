import Link from "next/link"

import { cn } from "@/lib/utils"

import { ArrowRightUp } from "../ui/icons"

interface Props {
  title: string
  href: string
  className?: string
}
export function ResourceLink({ title, href, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "flex items-center gap-1 text-sm text-muted-foreground transition-transform duration-300 hover:underline",
        className
      )}
    >
      {title}
      <ArrowRightUp className="size-4" />
    </Link>
  )
}
