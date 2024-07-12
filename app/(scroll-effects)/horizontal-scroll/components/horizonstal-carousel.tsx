"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import Card from "./card"

export function HorizontalScrollCarousel() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    //ScrollYProgress has a value bw 0 (start) and 1(end)
    target: targetRef,
  })

  //useTransform takes 3 values
  // motion value
  // array of value to map from
  // array of value to map to
  const carouselXProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", "-90%"]
  )

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-secondary-foreground"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x: carouselXProgress }} className="flex gap-4">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const cards = [
  {
    url: "https://picsum.photos/450",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://picsum.photos/450",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://picsum.photos/450",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://picsum.photos/450",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://picsum.photos/450",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://picsum.photos/450",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://picsum.photos/450",
    title: "Title 7",
    id: 7,
  },
]
