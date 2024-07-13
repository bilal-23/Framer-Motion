import { AppProps } from "next/app"

import "@/styles/globals.css"
import Head from "next/head"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import NextTopLoader from "nextjs-toploader"

import { Header } from "@/components/header/header"
import { ThemeProvider } from "@/components/theme/theme-provider"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Page Transition</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <NextTopLoader
          color="hsl(var(--primary))"
          height={2}
          showSpinner={false}
        />
        <Header />

        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.75 }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                opacity: 0,
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }}
            className="container flex-1"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default MyApp
