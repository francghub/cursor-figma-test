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
      </div>
      
      <div className="footer-logos">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/2/22/Willem_de_Kooning_Academy_logo.png" 
          alt="Willem de Kooning Academy" 
          className="footer-logo"
        />
        <img 
          src="https://pzwart.nl/wp-content/themes/pietzwart/assets/img/logo.svg" 
          alt="Piet Zwart Institute" 
          className="footer-logo"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Hogeschool_Rotterdam_logo.svg" 
          alt="Rotterdam University of Applied Sciences" 
          className="footer-logo"
        />
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Experimental Publishing. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

