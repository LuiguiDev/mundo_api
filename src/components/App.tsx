import Discover from "./Discover"
import Footer from "./Footer"
import Header from "./Header"
import LandingPage from "./LandingPage"
import Product from "./Product"
import '../styles/app.css'

const PricesPerGram = {
  'azahar': 1.2,
  'multifloral': 1.1,
  'blanca': 1.2
}

const PRODUCTS = [
  {
    img: './file',
    name: 'Miel de azahar',
    content: 50,
    get price(): number{
      return this.content * PricesPerGram.azahar
    }
  },
  {
    img: '',
    name: 'Miel multifloral',
    content: 50,
    get price(): number {
      return this.content * PricesPerGram.multifloral
    }
  },
  {
    img: '',
    name: 'Miel cremosa',
    content: 50,
    price: getPrice(120, 'blanca')
  }
]

function getPrice (content: number, productName: string) {
  const total = content * PricesPerGram[productName]
  return Math.round(total)
}

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Discover />
      <div className="products">
        <h2 className="products_header">NUESTROS PRODUCTOS</h2>
        <li className='products_list'>
        {
          PRODUCTS.map((element) => {
              return(
                <Product 
                  img={element.img}
                  name={element.name}
                  content={element.content}
                  price={element.price}
                />
              )
            })
        }
        </li>
      </div>
      <section className="puntos_de_venta">
        <div className="products_header">
          <h2>PUNTOS DE VENTA</h2>
        </div>
        <div className="location">
          <div className="location_direction">
            <h4>Cencalli</h4>
            <p>Av. Parque Lira S/N, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11850 Ciudad de México, CDMX</p>
          </div>
          <div className="location_img">
            <img 
              className="l_img"
              src="./src/images/location.png" 
            />
            <a 
              href="https://www.google.com/maps/place/Cencalli+%22Casa+del+ma%C3%ADz+y+la+cultura+alimentaria%22/@19.4167698,-99.1931673,17.62z/data=!4m6!3m5!1s0x85d201555b509f89:0x847e3b288e6d2a64!8m2!3d19.4171637!4d-99.1920113!16s%2Fg%2F11rhp8sx7f?entry=ttu" 
              className="view_map"
            >
              Ver mapa
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App