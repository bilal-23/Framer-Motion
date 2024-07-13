import Link from "next/link"
import { CONSTANTS } from "@/constants"

import Heading from "@/components/tutorial-page/Heading"

const youtubeUrl =
  CONSTANTS.YOUTUBE + `wDXlICv01gw&list=PLA4qBVt61k3Phpwt7uqaptIg9NYZ5aNu_`
const githubUrl =
  CONSTANTS.GITHUB_PAGES_ROUTER + `/page-transition-12/index.tsx`

export default function PageTransition() {
  return (
    <>
      <main className="flex flex-col gap-8 p-10">
        <Heading
          heading="Page Transition page router"
          href={{ tutorial: youtubeUrl, github: githubUrl }}
        />
        <ul>
          <li>
            <Link href="/page-transition-12/about">About</Link>
          </li>
        </ul>
        <div>
          <p>
            This is the home page. We are using page router for transition in
            this, because ehh pages are also important even if they are old
          </p>
        </div>
        <div>
          <h2>View Transition in App Router</h2>
          <Link href={"/page-transition"}>Click here</Link>
        </div>
      </main>
    </>
  )
}
