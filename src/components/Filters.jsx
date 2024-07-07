
const Filters = ({search, setSearch, sorte, setSorte}) => {
  return (
    <section className='section-filters'>
      <div className='input-search'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar"/>
      </div>
      <select value={sorte} onChange={(e) => setSorte(e.target.value)}>
        <option >---Elige---</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </section>
  )
}

export default Filters