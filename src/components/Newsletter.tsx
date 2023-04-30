import React from "react"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterSubscribe from './NewsletterSubscribe';

/**
 * Newsletter section
 */

const Newsletter = () => {
  
    return(
        <MailchimpSubscribe
            url={ process.env.REACT_APP_NEXT_PUBLIC_MAILCHIMP_URL }
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