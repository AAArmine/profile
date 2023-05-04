import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
  const [valid, setValid] = useState(false);
  const form = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const text = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ArmineEmailPorfo',
        'template_vfae0id',
        form.current,
        '7QHghtyZK0RVR-sDe'
      )
      .then(
        (result) => {
          console.log(result);
          toast('Thank you for reaching out! Your message has been sent.', {
            type: 'info',
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast('Something went wrong. Please try again!', {
            type: 'warning',
          });
        }
      );
  };
  const checkValidFields = () => {
    name.current.value &&
    subject.current.value &&
    text.current.value &&
    email.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ? setValid(true)
      : setValid(false);
  };
  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <li className="short">
            <input
              ref={name}
              type="text"
              name="user_name"
              placeholder="Name"
              onChange={checkValidFields}
            />
          </li>
          <li className="short ml">
            <input
              ref={email}
              type="email"
              name="user_email"
              placeholder="Email"
              onChange={checkValidFields}
            />
          </li>
          <li>
            <input
              ref={subject}
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={checkValidFields}
            />
          </li>
          <li>
            <textarea
              ref={text}
              placeholder="Message"
              name="message"
              onChange={checkValidFields}
            ></textarea>
          </li>
          <div className={`custom-btn ${valid && 'active'}`}>
            <button type="submit">Send</button>
          </div>
        </ul>
      </form>
      <ToastContainer
        className="toast"
        position="top-center"
        pauseOnHover
        autoClose={7000}
      />
    </div>
  );
};

export default Form;
