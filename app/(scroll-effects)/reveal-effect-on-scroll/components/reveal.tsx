import { useEffect, useRef } from "react"
import { motion, useAnimationControls, useInView } from "framer-motion"

interface Props {
  children: React.ReactNode
  width?: "fit-content" | "100%"
}
export function Reveal({ children, width = "fit-content" }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const controls = useAnimationControls()
  const slideControls = useAnimationControls()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      slideControls.start("visible")
    }
  }, [controls, isInView, slideControls])

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: "0%",
          },
          visible: {
            left: "100%",
          },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute inset-x-0 inset-y-[4px] z-20 bg-muted-foreground"
      ></motion.div>
    </div>
  )
}
