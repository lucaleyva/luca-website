import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 style={{textAlign: 'left'}}>Contact</h2>
      <form action="https://formspree.io/f/xvojjbpr" method="POST" id="contactForm">
        <div className="form-row">
          <label htmlFor="subject">Subject:</label>
          <input name="subject" type="text" placeholder="Your subject.." id="subject" />
        </div>
        <div className="form-row">
          <label htmlFor="email">Your email:</label>
          <input type="email" name="email" id="email" placeholder="Your email.." />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" placeholder="Write your message.." style={{height:'150px'}}></textarea>
        </div>
        <div className="form-row">
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;