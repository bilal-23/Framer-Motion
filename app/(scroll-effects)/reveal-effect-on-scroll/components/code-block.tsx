import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

export function CodeBlockContainer() {
  const [copy, setCopy] = useState(false)

  return (
    <div className="grid min-h-screen w-full place-content-center bg-[#101010]">
      <div className="w-[600px] overflow-hidden rounded-xl bg-[#282C34]">
        <div className="flex justify-between px-6 pb-3 pt-6">
          <div className="flex space-x-2">
            <div className="h-4 w-4 rounded-full bg-red-500"></div>
            <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
          </div>
          {copy ? (
            <button className="text-white">Copied</button>
          ) : (
            <button
              className="text-white"
              onClick={() => {
                navigator.clipboard.writeText(codeString)
                setCopy(true)
                setTimeout(() => {
                  setCopy(false)
                }, 1500)
              }}
            >
              Copy
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{ padding: "27px" }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

const codeString = `
import {  motion, useAnimationControls, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
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
        className="absolute bottom-[4px] left-0 right-0 top-[4px] z-20 bg-slate-300"
      ></motion.div>
    </div>
  )
}
`
