import Link from "next/link"
import { CONSTANTS } from "@/constants"

import Heading from "@/components/tutorial-page/Heading"

const youtubeUrl =
  CONSTANTS.YOUTUBE + `wDXlICv01gw&list=PLA4qBVt61k3Phpwt7uqaptIg9NYZ5aNu_`
const githubUrl =
  CONSTANTS.GITHUB_PAGES_ROUTER + `/page-transition-12/index.tsx`

export default function About() {
  return (
    <main className="flex flex-col gap-8 p-10">
      <Heading
        heading="Page Transition page router About Page"
        href={{ tutorial: youtubeUrl, github: githubUrl }}
      />
      <ul>
        <li>
          <Link href="/page-transition-12">Home</Link>
        </li>
      </ul>
      <div>
        <p>
          This is the about page. We are using page router for transition in
          this, because ehh pages are also important even if they are old
        </p>
      </div>
    </main>
  )
}
