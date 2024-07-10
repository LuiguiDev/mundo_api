import { ProductType } from "../types"
import '../styles/product.css'

function Product ({name, content, price}: ProductType) {
  return (
    <div className="ProductContainer">
      <img className='product_img' src='https://i.ibb.co/HrPLjJs/honey-jar.jpg' />
      <div className="ProductDetails">
        <h3 className="ProductName">{name}</h3>
        <div className="ProductContentNPrice">
          <p>Contenido: {content} g</p>
          <p>Precio: $ {Math.round(price)} mxn</p>
        </div>
      </div>
    </div>
  )
}

export default Product