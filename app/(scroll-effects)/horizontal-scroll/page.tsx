import { CONSTANTS } from "@/constants"

import Heading from "@/components/tutorial-page/Heading"

import { HorizontalScrollCarousel } from "./components/horizonstal-carousel"

const youtubeUrl =
  CONSTANTS.YOUTUBE + "4ehYkfh7P-I&list=PLA4qBVt61k3Phpwt7uqaptIg9NYZ5aNu_"
const githubUrl =
  CONSTANTS.GITHUB + "/(scroll-effects)/horizontal-scroll/page.tsx"

export default function HorizontalScroll() {
  return (
    <>
      <Heading
        heading="Horizontal Scroll"
        href={{
          tutorial: youtubeUrl,
          github: githubUrl,
        }}
      />
      <div className="bg-secondary">
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll down
          </span>
        </div>
        <HorizontalScrollCarousel />
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div>
      </div>
    </>
  )
}
