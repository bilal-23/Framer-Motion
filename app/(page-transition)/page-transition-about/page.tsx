import Link from "next/link"
import { CONSTANTS } from "@/constants"

import Heading from "@/components/tutorial-page/Heading"

import { TransitionLink } from "../components/TransitionLink"

const youtubeUrl = CONSTANTS.YOUTUBE + "fx6KMItwJAw&ab_channel=TomIsLoading"
const githubUrl =
  CONSTANTS.GITHUB + "/(page-transition)/page-transition/page.tsx"

export default function PageTransition() {
  return (
    <>
      <Heading
        heading="Page Transition App router"
        href={{ tutorial: youtubeUrl, github: githubUrl }}
      />
      <ul>
        <li>
          <TransitionLink href="/page-transition">Home</TransitionLink>
        </li>
      </ul>
      <div>
        <p>This is the about page.</p>
      </div>
      <div>
        <h2>View Transition in Pages Router</h2>
        <Link href={"/page-transition-12"}>Click here</Link>
      </div>
    </>
  )
}
