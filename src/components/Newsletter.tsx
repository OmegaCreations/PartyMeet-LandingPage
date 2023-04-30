import React from "react"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterSubscribe from './NewsletterSubscribe';

/**
 * Newsletter section
 */

const Newsletter = () => {
  
    return(
        <MailchimpSubscribe
            url={ "https://partymeet.us21.list-manage.com/subscribe/post?u=56547ecc88e9a69a522c0fb92&amp;id=81e1c33a8f&amp;f_id=00ffbae1f0" }
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