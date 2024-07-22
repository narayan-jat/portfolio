import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";
import contactImage from "../media/contact.png";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      await axios.post('https://narayanjat.pythonanywhere.com/contact/', formData);
      toast.success("Email Sent Successfully");
      setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.log(error)
    toast.error("Facing Internal Server Error")
  }
};

  return (
    <div id="contact" style={{ padding: "150px 0" }}>
      <h2
        style={{ color: "green", textAlign: "center", paddingBottom: "50px" }}
      >
        Contact
      </h2>
      <div className="contact">
        <div className="contact-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required={true}
                onChange={handleChange}
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
                name="email"
                required={true}
                onChange={handleChange}
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
                name="message"
                onChange={handleChange}
                required={true}
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
          <img className="contact-image" alt="not found" src={contactImage}></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
