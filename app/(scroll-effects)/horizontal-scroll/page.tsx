import { TutorialLink } from "@/components/ui/tutorial-link"

import { HorizontalScrollCarousel } from "./components/horizonstal-carousel"

export default function HorizontalScroll() {
  return (
    <>
      <div className="space-y-2">
        <h1>Horizontal Scroll</h1>
        <TutorialLink href="https://www.youtube.com/watch?v=4ehYkfh7P-I&list=PLA4qBVt61k3Phpwt7uqaptIg9NYZ5aNu_" />
      </div>
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
