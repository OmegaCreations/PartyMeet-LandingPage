import React from "react"

/**
 * Newsletter section
 * TODO: setup newsletter backedn (mailchimp)
 */

const Newsletter = () => {
    return(
        <>
        <div className="w-100 h-auto px-2 sm:px-10 flex flex-col md:flex-row justify-center content-center py-12 bg-[#262626]">
            <div className="max-w-xl">
                <h1 className="font-bold text-[#FAFAFA] text-[25px] sm:text-[40px]">Nie przegap <span className="text-[#E77C40]">partyleetera!</span></h1>
                <p className="mt-2 text-[#FAFAFA]">Regularne maile z newsami o naszej aplikacji, masa możliwości dołożenia się do naszego rozwoju i benefity dla naszych wiernych słuchaczy!</p>
            </div>
            <div className="my-10 md:mx-8 mx-0 w-full sm:w-full md:w-full lg:w-2/5">
                <form className="flex flex-row">
                <input className="rounded-l text-grey-darker text-grey-darkest h-16 w-full border border-gray-100 bg-gray-100 py-2 px-4 text-lg font-normal text-gray-600 outline-none" type="text" placeholder="Twój mail :)" />
                <span className="text-grey-100 flex items-center rounded rounded-l-none border-0 bg-gray-100 px-0">
                    <button className="hover:bg-gredient-light rounded-r bg-[#E77C40] h-full w-[135px] py-2 px-6 text-[14px] font-normal text-white">Zapisz się</button>
                </span>
                </form>
            </div>
        </div>
        </>
    )
}

export default Newsletter