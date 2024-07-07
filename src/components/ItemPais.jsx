import { Link } from "react-router-dom"
const ItemPais = ({ item }) => {
  return (
    <Link className='card-pais' to={`/${item.name.common}`}>
      <figure>
        <img src={item.flags.png} alt="pais" />
      </figure>
      <div className="info-pais">
        <h3>{item.name.common}</h3>
        <p>Capital: {item.capital}</p>
        <p>Continente: {item.continents}</p>
        <p>Población: {item.population.toLocaleString()}</p>
      </div>
    </Link>
  )
}

export default ItemPais