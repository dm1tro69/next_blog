import classes from './contact-form.module.css'
import {useState} from "react";

async function sendContactData(contactDetails){
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Contact-Type': 'application/json'
        }

    })
    const data = await response.json()
    // if (!response.ok){
    //     throw new Error(data.message || 'Something went wrong')
    // }
}

const ContactForm = () => {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState()

   async function sendMessageHandler(e){
        e.preventDefault();
        await sendContactData({
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
        })
       setEnteredMessage('')
       setEnteredEmail('')
       setEnteredName('')

    }
    return (
        <section className={classes.contact}>
            <h1>Now can I help you?</h1>
            <form
                onSubmit={sendMessageHandler}
                className={classes.form}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input required type="email" id="email" value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input required type="text" id="name" value={enteredName} onChange={e => setEnteredName(e.target.value)}/>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea required type="text" id="message" rows="5" value={enteredMessage} onChange={e => setEnteredMessage(e.target.value)}/>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>

        </section>
    );
};

export default ContactForm;
