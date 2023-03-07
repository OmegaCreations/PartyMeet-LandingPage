import React from "react"
import HeroBg from '../assets/images/hero_bg.png'

/* Hero section */

const Hero = () => {

    return(
        <header className="header w-full h-screen flex items-center" style={{'backgroundImage': `url(${HeroBg})`}}>
            <div className="container md:max-w-3xl ml-3 md:ml-[110px]">
                <h1 className="font-black text-white uppercase text-[32px] sm:text-[48px] md:text-[64px]">
                    Wznosimy imprezy na wyższy level!
                </h1>
                <h2 className="text-white font-bold text-[14px] md:text-[20px] max-w-lg">
                    Wynajmij miejsce na imprezę, znajdź eventy w okolicy, poznaj nowych znajomych w aplikacji PartyMeet!
                </h2>
                <div className="buttons mt-12">
                <button type="button" 
                        className="transition duration-200 hover:bg-[#cc5a1a] inline-block font-bold text-white text-[12px] sm:text-[14px] rounded-full bg-[#E77C40] w-[125px] md:w-[200px] h-[60px] sm:ml-4">
                    Znajdź imprezę
                </button>
                <button type="button" 
                        className="transition duration-200 hover:border-[#cc5a1a] hover:text-[#cc5a1a] inline-block font-bold text-[#E77C40] text-[12px] sm:text-[14px] rounded-full border-2 border-[#E77C40] bg-none w-[125px] sm:w-[145px] h-[60px] ml-2 sm:ml-4">
                    O projekcie
                </button>
                </div>
            </div>
        </header>
    )
}

export default Hero