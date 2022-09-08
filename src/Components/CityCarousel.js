import Carousel from "./Carousel.js";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useGetAllCitiesQuery } from '../features/citiesAPI';

function CityCarousel() {
  
  const {
    data : cities, 
  

   }  = useGetAllCitiesQuery("")        

  // const [cities, setCities] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:4000/cities/') //cities/_id
  //     .then(response => {
  //       setCities(response.data.response)
  //       console.log(response.data)
  //     }
  //     )

  // }, [])


  return (
    <Carousel data={cities} range={4} slides={3} interval={5} />
  )
}

export default CityCarousel 