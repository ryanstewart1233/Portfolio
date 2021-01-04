
import '../styles/Form.scss'
import Button from './Button'



const Form = () => {

    return (
        <form action="#" class="form">

            <div className="form__name form__group">

                <input class="form__input" id="name" type="text" size="2" placeholder="Name" required />
                <label class="form__label" htmlFor="name">Name</label>
            </div>
            <div className="form__email form__group">

                <input class="form__input" id="email" type="email" placeholder="Email" required />
                <label class="form__label" htmlFor="email">Email</label>
            </div>
            <div className="form__message form__group">

                <textarea class="form__input" id="message" type="textArea" rows="10" placeholder="Your Message" required />
                <label class="form__label" htmlFor="message">Your Message</label>
            </div>

            {/* <Button color="red" exClass="form__btn" type="submit" >Send</Button> */}

            <button class="form__btn" type="submit">Send</button>



        </form>
    );
}

export default Form;


