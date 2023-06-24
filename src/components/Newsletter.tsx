import React from "react"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterSubscribe from './NewsletterSubscribe';
import { stat } from "fs";

/**
 * Newsletter section
 */

const Newsletter = () => {
    const url = import.meta.env.VITE_PUBLIC_MAILCHIMP_URL
    if(url) return(
        <MailchimpSubscribe
            url={ url }
            render={ (props) => {
                const { subscribe, status, message } = props || {};
                return (
                    <>

                    <NewsletterSubscribe 
                        status={ status }
                        message={ message }
                        onValidated={ formData => subscribe( formData ) }
                    />

                    </>
                )
            }}
        />
    )
}

export default Newsletter