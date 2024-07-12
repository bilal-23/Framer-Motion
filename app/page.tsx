import Link from "next/link"

const links = [
  {
    title: "Reveal Effect on scroll",
    href: "/reveal-effect-on-scroll",
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
    </main>
  )
}
