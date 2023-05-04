import React, {useRef, useState }  from 'react'
import '../Styles/CityCards.css';
import { Link as LinkRouter } from 'react-router-dom';
import { useGetAllCitiesQuery } from '../features/citiesAPI';
import SearchBar from './Searchbar';





export default function Cities() {

    const [search, setSearch] = useState('') //barra de busqueda

    

    const input = useRef() //input de busqueda

    function handleSearch(e) {
        setSearch(e.target.value)  //search bar por donde pasa el ref
      }
  
    const {
        data: cities,
    } = useGetAllCitiesQuery(search) //value que ingresa usuario input

    const cityPic = (item) => (
        <LinkRouter className='cityRouter' key={item._id} to={`/details/${item._id}`}>
            <div className="cityCard">
                <img className='imgCard' src={item.photo} alt='img' />
                <h3>{item.city}</h3>
                <p>{item.intro}</p>
            </div>
        </LinkRouter>

    )

    console.log(cities)

    return (
        <>
        <div>
            <div>
                <SearchBar ref={input} handleSearch={handleSearch} />
            </div>

        </div>
        <div className='iteration'>
            {cities?.response.map(cityPic)}
        </div>
        </>
    )
}
