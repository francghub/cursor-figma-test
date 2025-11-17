import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Experimental Publishing</h3>
          <p>Research & Media Archive</p>
          <p>Piet Zwart Institute</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@example.com</p>
          <p>Rotterdam, Netherlands</p>
        </div>
        <div className="footer-section">
          <h3>Follow</h3>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Experimental Publishing. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

