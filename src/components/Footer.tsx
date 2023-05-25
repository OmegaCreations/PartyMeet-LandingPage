import React from "react"
import { BsFacebook, BsFillEnvelopeFill, BsInstagram, BsTwitter } from "react-icons/bs"


export default function Footer(){
    return(
        <>
        <div className="w-full h-auto px-12 flex flex-col justify-center content-center items-center md:justify-between md:flex-row py-8 bg-white">
            <h3 className="text-[#262626] ml-0 mb-6 md:mb-0 w-full md:w-2/5 text-center font-semibold text-[14px] ">PartyMeet - Plan. Meet. Repeat.</h3>
            <div className="socials w-full md:w-auto flex justify-between items-center content-center">
                <a href="https://www.facebook.com/profile.php?id=100089915721321"><BsFacebook size={18}/></a>
                <a href="https://twitter.com/PartymeetMe"><BsTwitter size={18}/></a>
                <a><BsInstagram size={18}/></a>
                <a><BsFillEnvelopeFill size={18}/></a>
            </div>
        </div>
        </>
    )
}