import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ItemPais from "../components/ItemPais";
import axios from "axios";
import Filters from "../components/Filters";


const PaisPage = () => {
  const ENDPOINT = 'https://restcountries.com/v3.1/all';
  const [search, setSearch] = useState('');
  const [data, setdata] = useState([]);
  const [sorte, setSorte] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(ENDPOINT)
      .then(res => {
        setdata(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false)
      })
  }, [])
  console.log(data);
  const newlist = data.filter(item => item.name.common.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      if (sorte === 'asc') {
        return nameA.localeCompare(nameB);
      } else if (sorte === 'desc') {
        return nameB.localeCompare(nameA);
      }
    });
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  return (
    <>
      <NavBar />
      <Filters 
      sorte={sorte}
      search={search}
      setSorte={setSorte}
      setSearch={setSearch}
      />
      <section className='container-paises'>
        {newlist?.map((item, i) => (
          <ItemPais item={item} key={i} />

        ))}
      </section>
    </>
  )
}

export default PaisPage