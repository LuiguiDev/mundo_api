import '../styles/landing_page.css'

const LandingPage = () => {
  return(
    <>
      <div className="landing_page">
        <h1>100% MIEL DE ABEJA</h1>
        <img className='landing_image' src="https://i.ibb.co/17XFz28/apicultor-expandido-op.webp" alt="Apicultores analizando un marco de panal de abejas en un campo verde con algunas flores amarillas, el cielo fue eliminado para integrar la imagen con el color de fondo de la página" />
        <div className="discover glass">
          <p>Descubre porqué comprar miel directo de apicultores como nosotros es la única forma de asegurarte que estás comprando miel autética.</p>
          <button>
            <a href="#discover">
              Descubrir
            </a>
          </button>
        </div>
      </div>
    </>  
  )
}

export default LandingPage