import { useState } from 'react';
import aboutpic from '../assets/Aboutpic.png';

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvgvvyjg', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('network-error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-form-wrap">
          <p className="eyebrow">Get in touch</p>
          <h2>Contact Me</h2>

          {status === 'success' ? (
            <div className="sent-state">
              <div className="sent-icon">✓</div>
              <p className="sent-title">Message Sent!</p>
              <p className="sent-text">
                Message sent from Sigma Portfolio — I'll get back to you soon!
              </p>
              <button className="sent-again" onClick={() => setStatus(null)}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Your Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Your Email
                  <input type="email" name="email" placeholder="Active email" required />
                </label>
              </div>
              <label>
                Your Message
                <textarea
                  name="message"
                  placeholder="Got questions about Sigma or personal doubts?"
                  required
                />
              </label>
              <button type="submit">Send</button>

              {status === 'error' && (
                <p className="response-msg error">Something went wrong. Please try again.</p>
              )}
              {status === 'network-error' && (
                <p className="response-msg neutral">Network error. Please try again later.</p>
              )}
            </form>
          )}

          <div className="social-row">
            <a href="https://www.linkedin.com/in/msubham/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/MSubham06" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/irl.subhhh" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:youremail@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="contact-pic">
          <img src={aboutpic} alt="Contact" />
        </div>
      </div>
    </section>
  );
}

export default Contact;