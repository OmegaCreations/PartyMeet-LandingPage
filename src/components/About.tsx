import React from "react"
import RentBg from "../assets/images/rent_bg.png"
import MoneyBg from "../assets/images/money_bg.png"
import RateBg from "../assets/images/rate_bg.png"
import Shield from "../assets/images/shield.png"
import {BsFacebook, BsFillEnvelopeFill, BsInstagram, BsTwitter} from 'react-icons/bs'

/**
 * About section
 * Every div contains shortened information on app (Use ready to go component?)
 */

const About = () => {
    return(
        <div className="bg-[#FAFAFA] p-12 w-100 m-0 max-w-100">
            <div className="mt-32">
                <div className="flex flex-col-reverse md:flex-row items-right content-start justify-start" id="about-app">
                    <div className="max-w-xl mt-8 md:mt-5 justify-center md:justify-none ml-0 p-2 md:ml-12">
                        <h2 className="transition duration-200 text-[24px] md:text-[40px] font-bold text-[#262626] text-center md:text-left fade" direction="left">Impreza dla każdego</h2>
                        <p className="transition duration-300 mt-6 text-[12px] sm:text-[14px] md:text-[20px] text-[#737373] md:max-w-3xl font-medium">Niezależnie czy wybierasz się na imprezę po raz pierwszy czy też jesteś ich koneserem - dzięki aplikacji PartyMeet znajdziesz imprezy dostosowane do ciebie, a także samemu możesz zostać hostem, zarabiać oraz zaszaleć z wyobraźnią i zgarniać nagrody za topkę w rankingu!</p>
                    </div>
                    <div className="image w-100 flex md:block justify-center md:w-2/5 md:ml-32">
                        <img src={RateBg} alt="app rating" />
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <div className="flex flex-col md:flex-row items-right content-end justify-end">
                    <div className="image w-100 flex md:block justify-center md:w-2/5 md:mr-32">
                        <img src={RentBg} alt="phone with partymeet app" />
                    </div>
                    <div className="max-w-xl mt-8 md:mt-5 justify-center md:justify-none mr-0 p-2 md:mr-12">
                        <h2 className="transition duration-200 text-[24px] md:text-[40px] font-bold text-[#262626] text-center md:text-left fade">Wynajmij miejsce na swoją imprezę!</h2>
                        <p className="transition duration-300 mt-6 text-[12px] sm:text-[14px] md:text-[20px] text-[#737373] md:max-w-3xl font-medium">Nie masz gdzie zorganizować imprezy? A może chcesz odświeżyć trochę klimat imprez ze znajomymi?<br></br><br></br>Z aplikacją PartyMeet wynajmiesz miejsce pod dowolną imprezę bądź znajdziesz imprezy, do których będziesz mógł dołączyć ze znajomymi!</p>
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <div className="flex flex-col-reverse md:flex-row items-right content-start justify-start" id="earnings">
                    <div className="max-w-xl mt-8 md:mt-5 justify-center md:justify-none ml-0 p-2 md:ml-12">
                        <h2 className="transition duration-200 text-[24px] md:text-[40px] font-bold text-[#262626] text-center md:text-left fade" direction="left">Całkowicie nowe możliwości zarobku</h2>
                        <p className="transition duration-300 mt-6 text-[12px] sm:text-[14px] md:text-[20px] text-[#737373] md:max-w-3xl font-medium">Posiadasz właśną nieruchomość albo chciałbyś szybko zarobić? Dzięki aplikacji PartyMeet możesz tymczasowo wynająć mieszkanie pod imprezę i zgarnąć szybki przelew.<br></br><br></br>Natomiast jeśli chcesz robić to regularnie, pamiętaj o odpowiednim przystosowaniu mieszkania do imprez, zostań czołowym hostem i pnij się na szczyt rankingu!</p>
                    </div>
                    <div className="image w-100 flex md:block justify-center md:w-2/5 md:ml-32">
                        <img src={MoneyBg} alt="house with partymeet slogan" />
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <div className="flex flex-col md:flex-row items-right content-end justify-end">
                    <div className="image w-100 flex md:block justify-center md:w-2/5 md:mr-32">
                        <img src={Shield} alt="shield with partymeet logo" />
                    </div>
                    <div className="max-w-xl mt-8 md:mt-5 justify-center md:justify-none mr-0 p-2 md:mr-12">
                        <h2 className="transition duration-200 text-[24px] md:text-[40px] font-bold text-[#262626] text-center md:text-left fade">Bezpieczeństwo przede wszystkim</h2>
                        <p className="transition duration-200 mt-6 text-[12px] sm:text-[14px] md:text-[20px] text-[#737373] md:max-w-3xl font-medium">Twoje bezpieczeństwo jest dla nas najważniejsze! Dlatego nasz zespół cały czas pracuje nad udoskonalaniem naszych standardów, tak, aby nasi użytkownicy czuli się bezpieczni i byli objęci ochroną.</p>
                    </div>
                </div>
            </div>


            <div className="mt-32 mb-32">
                <div className="flex flex-col items-center content-center justify-center">
                    <div className="max-w-3xl mt-8 md:mt-5 justify-center" id="contact">
                        <h2 className="transition duration-200 text-[24px] md:text-[40px] font-bold text-[#262626] text-center fade" direction="left">Dowiedz się więcej!</h2>
                        <p className="transition duration-200 mt-6 text-[12px] sm:text-[14px] md:text-[20px] text-[#737373] text-Left font-medium">Jeżeli chcesz dowiedzieć się więcej o naszej aplikacji zachęcamy do subskrybcji naszego partylettera, a także pobrania poniżej naszego whitepaper’a, w którym znajdziesz wszelkie odpowiedzi na nurtujące cię pytania! Natomiast jeżeli jesteś dalej głodny wiedzy, z przyjemnością odpowiemy na każdą twoją wiadomość! </p>
                    </div>
                    <button type="button" 
                        className="transition duration-200 hover:bg-[#cc5a1a] inline-block font-bold text-white text-[12px] sm:text-[14px] rounded-full bg-[#E77C40] w-[200px] h-[60px] mt-[40px]">
                    Pobierz Whitepaper!
                    </button>
                    <div className="socials mt-[40px] flex justify-between items-center content-center">
                        <a href="https://www.facebook.com/profile.php?id=100089915721321"><BsFacebook/></a>
                        <a href="https://twitter.com/PartymeetMe"><BsTwitter/></a>
                        <a><BsInstagram/></a>
                        <a><BsFillEnvelopeFill/></a>
                    </div>
                    <p className="font-bold text-[11px] mt-6">Psst...na naszych socialach znajdziesz też zdjęcia zza kulis :)</p>
                </div>
            </div>
        </div>
    )
}

export default About