import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! We will get back to you shortly.");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us Your Query</h2>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="John"
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+91 99999 99999"
            />
          </div>

          <div className="form-group">
            <label>Your Query</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your requirement..."
            />
          </div>

          <button className="submit-btn" type="submit">
            Submit Query
          </button>
        </form>

        {/* INFO */}
        <div className="contact-info">
          <div className="section-badge">Get In Touch</div>

          <h2>We're Here to Help</h2>

          <p>
            Reach out for quotes, technical queries, or partnership
            opportunities. Our team is ready to assist you.
          </p>

          <div className="info-items">

            <div className="info-item">
              <div className="info-icon">ðŸ“�</div>
              <div className="info-text">
                <strong>Address</strong>
                <span>Delhi, India</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">ðŸ“ž</div>
              <div className="info-text">
                <strong>Phone</strong>
                <span>+91 99999 99999</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">âœ‰ï¸�</div>
              <div className="info-text">
                <strong>Email</strong>
                <span>info@rapidengg.com</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">ðŸ•�</div>
              <div className="info-text">
                <strong>Working Hours</strong>
                <span>Monâ€“Sat, 9amâ€“6pm</span>
              </div>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="social-row">
            <button className="social-btn">f</button>
            <button className="social-btn">in</button>
            <button className="social-btn">ð�•�</button>
            <button className="social-btn">ðŸ“·</button>
          </div>

        </div>
      </div>
    </section>
  );
}