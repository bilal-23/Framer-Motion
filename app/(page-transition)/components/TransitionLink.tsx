"use client"

import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

function sleep(ms: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, ms)
  })
}

interface TransitionLinkProps extends LinkProps {
  href: string
  children: React.ReactNode
}

export function TransitionLink({
  href,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter()

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Run exit animation
    const body = document.body
    body.classList.add("page-transition")

    await sleep(500)

    // Sleep for some time
    router.push(href)

    await sleep(500)

    // Run enter animation
    body.classList.remove("page-transition")
  }

  return (
    <Link
      href={href}
      {...props}
      className="underline"
      onClick={handleTransition}
    >
      {children}
    </Link>
  )
}
