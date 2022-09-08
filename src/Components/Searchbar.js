import React, { useState,useEffect } from 'react'
import axios from 'axios'




function SearchBar() {

  const [cities, setCities] = useState([])

  const [search, setSearch] = useState('')

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios.get('http://localhost:4000/cities/')
        .then(response =>{
            setCities(response.data.response)
            console.log(response.data) 
        } 
        )  
        
},  [])


  useEffect(() => {
    axios.get('http://localhost:4000/cities/?city=' + search)
      .then(response => {
        setCities(response.data.response)
        console.log(response.data)
      }
      )

  }, [search])

  return (
    <div className='iteration'>
      <div className='filter'>
        <form>
          <label>Search</label>
          <input type="text" name="" onKeyUp={handleSearch} />
        </form>
      </div>
    </div>
  )
}
export default SearchBar