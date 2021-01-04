import '../styles/Contact.scss'
import Button from './Button'


import Form from './Form'

const Contact = () => {




    return (
        <section className="contact" id="contact">

            <div className="contact__title">
                Contact Me
            </div>
            <div className="contact__text">
                <span> Looking for a passionate junior developer to join your team?</span>

            </div>
            <Form></Form>
            {/* <Button color="red" exClass="contact__btn" to="/contact">Send me a message</Button> */}

        </section>
    );
}

export default Contact;
