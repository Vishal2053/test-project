import "../styles/Contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let’s start a conversation about your future.</p>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">

          <h2>Get In Touch</h2>

          <div className="info-grid">

            <div className="info-card">
              <h3>Office Address</h3>
              <p>123 Business Avenue<br />New York, NY 10001</p>
            </div>

            <div className="info-card">
              <h3>Email</h3>
              <p>info@quintessenceatelier.com</p>
            </div>

            <div className="info-card">
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>

          </div>

        </div>
      </section>

     {/* ✅ CONTACT FORM (Footer च्या वर) */}
<ContactForm />

    </div>
  );
}


export default Contact;