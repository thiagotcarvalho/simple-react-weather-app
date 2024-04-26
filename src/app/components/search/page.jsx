'use client'

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="weather-search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="city-search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button className="weather-search-button" onClick={handleSearch}>Search Weather</button>
    </div>
  )
}