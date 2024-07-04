import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";
import contactImage from "../media/contact.png";

function Contact() {
  return (
    <div id="contact" style={{ padding: "150px 0" }}>
      <h2
        style={{ color: "green", textAlign: "center", paddingBottom: "50px" }}
      >
        Contact
      </h2>
      <div className="contact">
        <div className="contact-form">
          <Form>
            <Form.Group className="mb-3 " controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  boxShadow: "none",
                  width: "100%",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  boxShadow: "none",
                  width: "100%",
                }}
              />
              <Form.Text className="text-muted">
                This will help me to get back to you.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  boxShadow: "none",
                  width: "100%",
                }}
              />
            </Form.Group>

              <div className="contact-button">
              <Button id="contact-button" type="submit">
              Send Message
            </Button>
              </div>
          </Form>
        </div>
        <div id="contact-image">
          <img className="contact-image" src={contactImage}></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
