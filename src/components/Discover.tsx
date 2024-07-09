import '../styles/discover.css'
import DonutChart from './DonoutChart'

const Discover = () => {
  return(
    <div className="discover_container">
      <DonutChart />
      <p style={{marginTop: '20px'}}>
        La miel auténtica necesita de una perfecta combinación entre la naturaleza y la paciencia, pero a nivel mundial se vende más miel de la que la población mundial de abejas es capaz de producir, los productos adulterados o completamente falsos explican esa diferencia.
      </p>
    </div>
  )
}

export default Discover