import React from "react"
import { useState } from "react"
import {sanitize} from '../utils/miscellaneous'
import {
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const NewsletterSubscribe = ({status, message, onValidated}) => {

    const [ error, setError ] = useState(null);
    const [ email, setEmail ] = useState(null);

    // popup modal
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(!open);

    
    // Handle submit
    const handleFormSubmit = () => {
        setError(null);

        // Check if is there anything
        if(!email){
            setError("Wprowadź poprawny adres email.");
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // on succ => true
        if(email && (email.indexOf("@") > -1) && isFormValidated)
        setOpen(!open);
        
        return email && (email.indexOf("@") > -1) && isFormValidated;
    }

    // Submit with enter ;DD
    const handleInputKeyEvent = ( e ) => {
        setError(null);
        if(e.keyCode === 13){
            e.preventDefault();
            handleFormSubmit();
        }
    }

     /**
   * Extract message from string.
   */

    const getMessage = (message) => {
        if ( !message ) {
        return null;
        }
        const result = message?.split('-') ?? null;
        if ( "0" !== result?.[0]?.trim() ) {
        return sanitize(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? sanitize( formattedMessage ) : null;
    }

    return(

        <>

        {'success' === status && 'error' !== status && !error && (
                
                <Dialog open={open} handler={handleOpen}>
                    <div className="w-full z-[100]">
                        <DialogBody>
                        <span className="text-xl">Dziękujemy za subskrypcję naszego newslettera!</span>
                        </DialogBody>
                        <DialogFooter>
                        <button type="button" className="hover:bg-gredient-light rounded-none bg-[#E77C40] h-full w-[135px] py-2 px-6 text-[14px] font-normal text-white" onClick={handleOpen}>Zamknij</button>
                        </DialogFooter>
                    </div>
                </Dialog>

        )}
          
        

        <div className="w-100 h-auto px-2 sm:px-10 flex flex-col md:flex-row justify-center content-center py-12 bg-[#262626]">
            <div className="max-w-xl">
                <h1 className="font-bold text-[#FAFAFA] text-[25px] sm:text-[40px]">Nie przegap <span className="text-[#E77C40]">partyleetera!</span></h1>
                <p className="mt-2 text-[#FAFAFA]">Regularne maile z newsami o naszej aplikacji, masa możliwości dołożenia się do naszego rozwoju i benefity dla naszych wiernych słuchaczy!</p>
            </div>
            <div className="my-10 md:mx-8 mx-0 w-full sm:w-full md:w-full lg:w-2/5">
                <form className="flex flex-row">
                    <input
                        onChange={(e) => {setEmail(e?.target?.value ?? '')}}
                        onKeyUp={(e) => handleInputKeyEvent(e)}
                        className="rounded-l text-grey-darker text-grey-darkest h-16 w-full border border-gray-100 bg-gray-100 py-2 px-4 text-lg font-normal text-gray-600 outline-none" 
                        type="email"
                        placeholder="Twój mail :)" />
                    <span className="text-grey-100 flex items-center rounded rounded-l-none border-0 bg-gray-100 px-0">
                        <button 
                            onClick={handleFormSubmit}
                            className="hover:bg-gredient-light rounded-r bg-[#E77C40] h-full w-[135px] py-2 px-6 text-[14px] font-normal text-white">Zapisz się</button>
                    </span>
                </form>
                <div className="min-h-42px">
                    {'error' === status || error ? (
                    <div
                        className="text-red-700 pt-2"
                        dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
                    />
                    ) : null }
                    {'success' === status && 'error' !== status && !error && (
                    <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
                    )}
                </div>
            </div>
        </div>


        </>
    )
}

export default NewsletterSubscribe;