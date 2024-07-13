import Link from "next/link"

const links = [
  {
    title: "Reveal Effect on scroll",
    href: "/reveal-effect-on-scroll",
  },
  {
    title: "Horizonstal Scroll",
    href: "/horizontal-scroll",
  },
  {
    title: "Page Transition page router",
    href: "/page-transition-12",
  },
  {
    title: "Page Transition app router",
    href: "/page-transition",
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-10">
      <h1>Framer Motion Tutorial</h1>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          )
        })}
      </ul>
      <ul>
        <h2>Stuff to read</h2>
        <li>
          <Link href="https://next-view-transitions.vercel.app/">
            NextJS View Transition
          </Link>
          <p className="ml-4 grid [&:not(:first-child)]:mt-0">
            <span>This is a good article about view transition.</span>
            <span>
              This can be used to create a smooth transition between pages
              without adding any other libraries.
            </span>
          </p>
        </li>
      </ul>
    </main>
  )
}
