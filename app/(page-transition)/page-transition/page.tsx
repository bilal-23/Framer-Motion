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
          <TransitionLink href="/page-transition-about">About</TransitionLink>
        </li>
      </ul>
      <div>
        <p className="grid">
          <span>
            This effect specifically dont use framer motion, you can use any but
            I have used basic CSS transition
          </span>
          <span>
            It relies on vanilla css, and manually controlling the change of
            route by adding class on body tag and then removing it.
          </span>
          <span>
            I don&apos;t recommend using it, it is not as smooth as the{" "}
            <Link
              href={"https://next-view-transitions.vercel.app/"}
              target="_blank"
              className="underline"
            >
              ViewTransition
            </Link>
          </span>
          <span>
            Or You can use the Template file to make a animate in transition, it
            wont have the exit animation though.
          </span>
          <span>
            Check out the tutorial here:
            <Link
              href="https://www.youtube.com/watch?v=jVU3JD6qOBo&ab_channel=HamedBahram"
              target="_blank"
              className="underline"
            >
              Template Transition
            </Link>
          </span>
        </p>
      </div>
      <div>
        <h2>Code</h2>
        <ul className="grid">
          <li className="list-item">
            Creating an own version of{" "}
            <Link
              href={
                CONSTANTS.GITHUB +
                "/(page-transition)/components/TransitionLink.tsx"
              }
              target="_blank"
              className="underline"
            >
              Link Component
            </Link>
          </li>
          <li>Animate Out the Current Route and Animate in Next Route</li>
          <li>Disbale the default behavior of the link component</li>
          <li>Run Animation</li>
          <li>Sleep for some time</li>
          <li>Remove the class from body tag</li>
        </ul>
      </div>
      <div>
        <h2>View Transition in Pages Router</h2>
        <Link href={"/page-transition-12"}>Click here</Link>
      </div>
    </>
  )
}
