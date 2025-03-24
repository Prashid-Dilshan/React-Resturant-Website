import React from "react";
import "./Contact.css"; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="Contact-title">
        Contact <span>PD Restaurant</span>
      </h1>

      <p className='contact-p'>We’re here to make your dining experience even better! Whether you have a question, need a reservation, or want to give feedback, feel free to reach out. Visit us at our Colombo location or send us a message—we’d love to hear from you! Your satisfaction is our priority, and we’re always happy to assist you.</p>

      <div className="contact-content">
        {/* Location Map */}
        <div className="contact-map">
          <h3>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.20504725473!2d79.7730208147837!3d6.927078299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25945026b5b4f%3A0x7843176c210f96!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1647614699575!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Message</label>
            <textarea rows="4" placeholder="Write your message..."></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
