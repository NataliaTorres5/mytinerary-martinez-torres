import React, { useState,useEffect } from 'react'
import axios from 'axios'




function SearchBar(props) {


  return (
    <div className='iteration'>
      <div className='filter'>
        <form>
          <label>Search</label>
          <input type="text" name="" ref={props.ref} onChange={props.handleSearch}  />
        </form>
      </div>
    </div>
  )
}
export default SearchBar