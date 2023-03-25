import React from "react"
import Placeholder from "../assets/images/placeholder.jpg"

/**
 * Reviews section
 * TODO: get reviews and maybe setup one reusable component
 */

export default function Reviews(){
    return(
        <>
            <div className="bg-white mb-8 py-16 px-2 sm:px-12 flex flex-col items-center content-center justify-center">
                <h2 className="transition duration-200 text-[32px] md:text-[40px] font-bold text-[#262626] text-center">Co o nas mówią</h2>
                <p className="max-w-2xl mt-6 text-[12px] sm:text-[14px] md:text-[20px] text-[#737373] text-center font-medium">Poznaj naszą aplikację i wystaw nam opinię. Doceniamy każdą możliwość stania się lepszym miejscem rozrywki!</p>
                <div className="flex flex-col xl:flex-row mt-8 justify-center content-center items-center md:justify-none">
                    <div className="w-auto max-w-md mt-8 flex flex-col sm:flex-row items-center justify-center">
                        <img src={Placeholder} alt="reviewer logo" className="w-100 sm:w-[120px] h-auto"/>
                        <div className="ml-8 text-center md:text-left">
                            <h1 className="font-bold text-[#262626] mt-6 text-[24px]">Nazwa fundacji</h1>
                            <h2 className="text-[12px] font-semibold text-[#737373] mt-2">Podpis o fundacji</h2>
                            <p className="review mt-6 font-medium text-[#737373] text-[16px]">
                                <span className="text-[#E77C40]">,,</span>
                                Przykładowa recenzja fundacji
                                <span className="text-[#E77C40]">’’</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-auto max-w-md mt-8 flex flex-col sm:flex-row items-center justify-center">
                        <img src={Placeholder} alt="reviewer logo" className="w-100 sm:w-[120px] h-auto"/>
                        <div className="sm:ml-8 text-center md:text-left">
                            <h1 className="font-bold text-[#262626] mt-6 text-[24px]">Nazwa fundacji</h1>
                            <h2 className="text-[12px] font-semibold text-[#737373] mt-2">Podpis o fundacji</h2>
                            <p className="review mt-6 font-medium text-[#737373] text-[16px]">
                                <span className="text-[#E77C40]">,,</span>
                                Przykładowa recenzja fundacji
                                <span className="text-[#E77C40]">’’</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}