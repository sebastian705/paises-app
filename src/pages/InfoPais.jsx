import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const InfoPais = () => {
  const { namePais } = useParams();
  const [pais, setPais] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${namePais}`)
      .then(res => {
        setPais(res.data[0])
        setIsLoading(false);
      }).catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [])
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  return (
    <>
      <NavBar />
      <Link className="back" to={'/'}>Regresar</Link>
      <article className="card-info-pais">
        <figure>
          <img src={pais.flags.png} />
        </figure>
        <div>
          <h3>{pais.name.common}</h3>
          <p>Capital: {pais.capital}</p>
          <p>Continente: {pais.continents}</p>
          <p>Lenguaje: {Object.values(pais.languages).join(", ")}</p>
          <p>Poblacion: {pais.population.toLocaleString()}</p>
          <a className="maps" href={pais.maps.googleMaps}>Maps</a>
        </div>
      </article>
    </>
  )
}

export default InfoPais