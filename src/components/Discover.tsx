import '../styles/discover.css'
import DonutChart from './DonoutChart'

const Discover = () => {
  return(
    <section className="discover_container" id='discover'>
      <DonutChart />
      <p style={{marginTop: '20px'}}>
        La miel auténtica necesita de una perfecta combinación entre la naturaleza y la paciencia, pero a nivel mundial se vende más miel de la que la población mundial de abejas es capaz de producir, los productos adulterados o completamente falsos explican esa diferencia.
      </p>
    </section>
  )
}

export default Discover