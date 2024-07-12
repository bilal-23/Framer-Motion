import { ResourceLink } from "./resource-link"

interface Props {
  heading: string
  href: {
    tutorial: string
    github: string
  }
}
export default function Heading({ heading, href }: Props) {
  return (
    <div className="space-y-2">
      <h1>{heading}</h1>
      <div className="flex items-center gap-1">
        <ResourceLink title="Tutorial" href={href.tutorial} />
        <ResourceLink title="Github" href={href.github} />
      </div>
    </div>
  )
}
