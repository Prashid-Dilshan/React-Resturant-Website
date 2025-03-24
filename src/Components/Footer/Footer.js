import React from 'react'

function Footer() {
  return (
    <div>

            {/* Contact Information Grid */}
            <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <div>
            <h3>Address</h3>
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>


        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <div>
            <h3>Call Us</h3>
            <p>+94 765683395</p>
          </div>
        </div>

      

        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <div>
            <h3>Email Us</h3>
            <p>prashiddilshan0710@gmail.com</p>
          </div>
        </div>



        <div className="contact-card">
          <div className="contact-icon">⏰</div>
          <div>
            <h3>Opening Hours</h3>
            <p>
              <strong>Mon-Sat:</strong> 9:00 AM - 11:00 PM <br />
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer