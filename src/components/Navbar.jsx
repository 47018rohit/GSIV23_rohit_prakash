import { useState } from 'react'
import { Search, Home, ArrowRightAlt } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)

  }
  const handleSubmit = () => {
    console.log(search)
    setSearch('')
  }

  return (
    <nav id="navbar">
      <section id="searchBox">
        <label htmlFor="search">
          <Search
            sx={{
              color: "#9B9B9B",
              width: "24px",
              height: "24px",
              fontWeight: "500"
            }}
          />
        </label>
        <input placeholder='Search' id="search" name="search" onChange={handleChange} value={search} />
        <button type='submit' onClick={handleSubmit} disabled={search===''}>
          <ArrowRightAlt sx={{
            color: `${search===""? "#9b9b9b":"#4a4a4a"}`,
            width: "24px",
            height: "24px",
            fontWeight: "500"
          }} />
        </button>
      </section>
      <Link to={"/"}>
        <Home
          sx={{
            display: "flex",
            width: "24px",
            height: "24px",
            justifyContent: "center",
            alignItems: "center",
            color: "#4a4a4a"
          }}
        />
      </Link>
      <Link to="/details">
        details
      </Link>
    </nav>
  )
}

export default Navbar
