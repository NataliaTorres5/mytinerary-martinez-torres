import Carousel from "./Carousel.js";

function CityCarousel () {
    const items = [
    {url:"/images/rotterdam-big.png", city:"Rotterdam - Netherlads"},
    {url:"/images/rio-big.png", city:"Rio de Janeiro - Brasil"},
    {url:"/images/singapur-big.png", city:"Singapur - Republic of  Singapore"},
    {url:"/images/prague-big.png", city:"Pagrue - Czech Republic"},
    {url:"/images/sanfrancisco-big.png", city:"San Francisco - USA"},
    {url:"/images/dubai-big.png", city:"Dubai - United Arab Emirates"},
    {url:"/images/luxemburg-big.png", city:"Luxenbourg city - Luxenbourg"},
    {url:"/images/bogota-big.png", city:"Bogota - Colombia"},
    {url:"/images/kyoto-big.png", city:"Kyoto - Japan"},
    {url:"/images/athens-big.png", city:"Athens - Greece"},
    {url:"/images/cairo-big.png", city:"Cairo -Egypt"},
    {url:"/images/sydney-big.png", city:"Sydney - Australia"},
  ]
  return (
    <Carousel  data={items} range={3} />
  )
}

export default CityCarousel 