import "../styles/Form.scss";
import Button from "./Button";

const Form = () => {
  return (
    <form action="https://formspree.io/f/xvovdpez" class="form" method="post">
      <div className="form__name form__group">
        <input
          class="form__input"
          id="name"
          type="text"
          size="2"
          placeholder="Name"
          required
          name="name"
        />
        <label class="form__label" htmlFor="name">
          Name
        </label>
      </div>
      <div className="form__email form__group">
        <input
          class="form__input"
          id="email"
          type="email"
          placeholder="Email"
          required
          name="_replyto"
        />
        <label class="form__label" htmlFor="email">
          Email
        </label>
      </div>
      <div className="form__message form__group">
        <textarea
          class="form__input"
          id="message"
          type="textArea"
          rows="10"
          placeholder="Your Message"
          required
          name="message"
        />
        <label class="form__label" htmlFor="message">
          Your Message
        </label>
      </div>

      {/* <Button color="red" exClass="form__btn" type="submit" >Send</Button> */}

      <button class="form__btn" type="submit" value="Send">
        Send
      </button>
    </form>
  );
};

export default Form;
