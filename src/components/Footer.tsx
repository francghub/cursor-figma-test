import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Experimental Publishing</h3>
          <p>Master program</p>
          <p>Willem de Kooning Academy</p>
          <p>Piet Zwart Institute</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Rotterdam University of Applied Sciences</p>
          <p>info@example.com</p>
        </div>
      </div>
      
          <div className="footer-logos">
            <svg className="footer-logo" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="25" fill="#000000" fontSize="10" fontWeight="600">WdKA</text>
            </svg>
            <svg className="footer-logo" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="5" y="25" fill="#000000" fontSize="10" fontWeight="600">Piet Zwart</text>
            </svg>
            <svg className="footer-logo" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="15" y="25" fill="#000000" fontSize="10" fontWeight="600">HR</text>
            </svg>
          </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Experimental Publishing. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

