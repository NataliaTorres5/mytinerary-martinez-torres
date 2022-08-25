import Carousel from "./Carousel.js";

function CityCarousel () {
    const items = [
    {url:"/images/rotterdam-big.png", city:"Rotterdam - Netherlads", id:'cit1'},
    {url:"/images/rio-big.png", city:"Rio de Janeiro - Brasil", id:'cit2'},
    {url:"/images/singapur-big.png", city:"Singapur - Republic of  Singapore", id:'cit3'},
    {url:"/images/prague-big.png", city:"Prague - Czech Republic", id:'cit4'},
    {url:"/images/sanfrancisco-big.png", city:"San Francisco - USA", id:'cit5'},
    {url:"/images/dubai-big.png", city:"Dubai - United Arab Emirates", id:'cit6'},
    {url:"/images/luxemburg-big.png", city:"Luxenbourg city - Luxenbourg", id:'cit7'},
    {url:"/images/bogota-big.png", city:"Bogota - Colombia", id:'cit8'},
    {url:"/images/kyoto-big.png", city:"Kyoto - Japan", id:'cit9'},
    {url:"/images/athens-big.png", city:"Athens - Greece", id:'cit10'},
    {url:"/images/cairo-big.png", city:"Cairo -Egypt", id:'cit11'},
    {url:"/images/sydney-big.png", city:"Sydney - Australia", id:'cit12'},
  ]
  return (
    <Carousel data={items} range={4} slides={3} interval={5} />
  )
}

export default CityCarousel 