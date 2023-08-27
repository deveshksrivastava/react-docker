import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to get in touch!</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
