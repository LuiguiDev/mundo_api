import '../styles/footer.css'

const Footer = () => {
  return(
    <footer>
      <div className="contact">
        <p>Contacto</p>
        <div className="contact_elements">
          <a href="">Formulario</a>
          <a href="">WhatsApp</a>
        </div>
      </div>
      <div className="social_media">
        <p>Síguenos</p>
        <div className="social_media_icons">
          <a href="">Facebook</a>
          <a href="">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer