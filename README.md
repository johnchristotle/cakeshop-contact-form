# I Am Christotle 

Cake Shop Tutorial Contact Form for App 

## Developer
* [Christotle Agholor](https://github.com/johnchristotle)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to use this template
* fork or clone the git repository
* Open the Contact code and replace the emailjs details with yours as shown bellow:

```
const sendEmail = (e) => {
    e.preventDefault();
   
     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
      console.log(result.text);
      setDelMessage('Message Sent Successfully! Expect a feedback soon.')
  }, (error) => {
      console.log(error.text);
      setDelMessage('Message failed to deliver! Please try agin later.')
  });

    e.target.reset();
  };
```

you can also customize the form fields to suit your need

```
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
                      <input type="text" required='true' placeholder="Delivery Type (e.g Home, Personal Pick up)." name="delivery_type" />
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
```

for help and guide please watch tutorial videos at:
https://youtube.com/@iamchristotle
