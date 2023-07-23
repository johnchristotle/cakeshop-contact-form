   
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const form = useRef();

  const [delMessage, setDelMessage] = useState('')
  
   
  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_18082vg', 'template_7lxid4k', form.current, 'iKVEhg_f3Fkx-lPGi')
    .then((result) => {
      console.log(result.text);
      setDelMessage('Message Sent Successfully! Expect a feedback soon.')
  }, (error) => {
      console.log(error.text);
      setDelMessage('Message failed to deliver! Please try agin later.')
  });

    e.target.reset();
  };

  return (
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h3>Cake Request Form</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" required='true' placeholder="First Name" name="first_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" name="last_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" required='true' placeholder="Email Address" name="user_email"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" required='true' placeholder="Phone No." name="user_phone" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" required='true' placeholder="Type of Cake." name="cake_type" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" required='true' placeholder="Location (e.g Port Harcourt)." name="user_location" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" required='true' placeholder="Message" name="message" ></textarea>
                    <Col>
                    <p>{delMessage}</p>
                    </Col>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                    
                  </Row>
                  
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

