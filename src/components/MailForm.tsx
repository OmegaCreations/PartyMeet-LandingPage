import React, { useState } from "react"
import LetterGif from '../assets/images/letter.gif'
import emailjs from 'emailjs-com';

const MailForm = () => {

    const [topic, setTopic] = useState("")
    const [mail, setMail] = useState("")
    const [text, setText] = useState("")

    const handleTopic = (e) => setTopic(e.target.value);
    const handleMail = (e) => setMail(e.target.value);
    const handleText = (e) => setText(e.target.value);

    
    // Sending mail form with Emailjs
    const sendFeedback = (e) => {
        const templateId = 'template_78oz3nn';

        e.preventDefault() // Dont reload to send request first

        emailjs.send(
          'service_xmopd86', // Service type
          templateId, // Id of template
          { // passed variables
            message: text, 
            from_name: topic, 
            reply_to: mail
        },
        '7LbUmWpLp5H8k_6-C'
        ).then(res => {
            console.log('Email successfully sent!')
            window.location.reload()
        })
        .catch(err => console.error('Error that occured:', err))
    }

    return(
        <div className="bg-white py-14 sm:px-12">
            <h2 className="transition duration-200 text-[32px] md:text-[40px] font-bold text-[#262626] text-center">Zadaj nam pytanie</h2>

            <div className="flex flex-col-reverse md:flex-row sm:px-12 items-center content-center justify-center">
                <form id="contact-form" onSubmit={sendFeedback} className="w-[300px] md:w-2/3 lg:w-1/3 h-auto flex flex-col">
                    <input onChange={handleTopic} type="text" className="h-[60px] rounded text-[#737373] border-[#E6E6E6] border-2 pl-6 bg-[#F9F9F9]" placeholder="Temat wiadomości" required/>
                    <input onChange={handleMail} type="email" className="mt-6 h-[60px] rounded text-[#737373] border-[#E6E6E6] border-2 pl-6 bg-[#F9F9F9]" placeholder="Twój mail" aria-describedby="emailHelp" required/>
                    <textarea onChange={handleText} className="mt-6 h-[180px] rounded text-[#737373] border-[#E6E6E6] bg-[#F9F9F9] border-2 pl-6 pt-6" placeholder="Treść wiadomości" required></textarea>
                    { (topic.length > 5 && mail.length > 0 && text.length >= 30) ? // Topic > 5 letters; Mail > 0; Mail content >= 30
                    <button type="submit" className="transition duration-200 hover:bg-[#cc5a1a] inline-block font-thin text-white text-[12px] sm:text-[14px] bg-[#E77C40] w-auto h-[60px] mt-6" >
                    Wyślij!
                    </button>
                    :
                    <button type="submit" className="transition duration-200 inline-block font-thin text-white text-[12px] sm:text-[14px] bg-[#E77C40] w-auto h-[60px] mt-6 hover:cursor-not-allowed" disabled>
                    Wyślij!
                    </button>
                    }
        
                </form>
                <div className="w-auto max-w-xl md:ml-6 my-4">
                    <img src={LetterGif} alt="letter gif" />
                </div>
            </div>
            
        </div>
    )
}

export default MailForm