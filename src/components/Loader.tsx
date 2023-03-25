import React, { useEffect, useRef } from "react"
import { GooeyCircleLoader } from "react-loaders-kit"
import Typed from "typed.js"

const Loader = () => {

    const el= useRef<HTMLSpanElement>(null)

    useEffect(() => {
        
        const typed = new Typed(el.current, {
            strings: ["Gorące imprezy w twojej okolicy!"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 40,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: false,
        })

        // Destropying
        return () => {
            typed.destroy()
        }

    }, [])

  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#f1b18e", "#E77C40", "#262626"],
  }

  return (
    <div className="loader z-[100] w-100 h-screen bg-white flex content-center items-center justify-center flex-col">
        <GooeyCircleLoader {...loaderProps} />
        <span className="text-lg" ref={el}></span>
    </div>
  )
}

export default Loader