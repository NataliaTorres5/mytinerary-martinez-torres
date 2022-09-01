import React from 'react'
import axios from 'axios';
import '../Styles/CityCards.css';
import { Link as LinkRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

// const items = [
//     { url: "/images/rotterdam-big.png", city: "Rotterdam", country: "Netherlads", text: "This city is one of the best-known Dutch cities of the world, is the second-largest city in the Netherlands, has the biggest port in Europe, making it a hub of many people with different backgrounds.   Visit landmarks and wonders of modern architecture like the Blaak near the Oude Heave, if you want to submerge yourself in a modern city experience one of the oldest countries in Europe, Come and visit! ", id: 'cit1' },
//     { url: "/images/rio-big.png", city: "Rio de Janeiro", country: "Brasil", text: "Rio de Janeiro have the largest urban forest in the world, its name is Floresta da Tijuca and have 33 square kilometers and have more than 100 islands on the city's coastline. There have 1 of the 7 wonders of the world and it the Christ the Redeemer, the incredible statue was built in 1931It is 30 meters high, and it is the largest Art Deco statue on the planet.", id: 'cit2' },
//     { url: "/images/singapur-big.png", city: "Singapur", country: "Republic of  Singapore", text: "This is a country that never cease to surprise its visitors. Known as the Republic of Singapore inside a country of the same name, is a melting pot of culture history, extravaganza of culinary delights you can visit the tallest indoor waterfall in the world located at the Gardens by the bay or go and experience the Singapore Zoo and National Orchid Garden or go to any of its food markets, this place has a lot to offer to you! ", id: 'cit3' },
//     { url: "/images/prague-big.png", city: "Prague", country: "Czech Republic", text: "Prague is the capital and largest city in the Czech Republic. One of the oldest universities in the world, Charles University is the most prestigious university in the Czech Republic, was founded by emperor Charles IV in 1348. Prague Castle is the largest in the world, the 130-meter-wide medieval castle and its 70,000 square meters.", id: 'cit4' },
//     { url: "/images/sanfrancisco-big.png", city: "San Francisco", country: "United States of America", text: "This city is one of the most iconic cities in USA, famous for its Golden Gate bridge, steep streets, Alcatraz and even one of the most beloved family sitcoms Full House.  This city has a great variety of cultural events like the San Francisco Festival of Gold, and the San Francisco Heritage Festival you are welcome to experience this city in all its wonderfulness! ", id: 'cit5' },
//     { url: "/images/dubai-big.png", city: "Dubai", country: "United Arab Emirates", text: "This wonderful city was just a desert 20 years ago., being one of the fastest developed cities we have seen in modern days, it has a long weekend in Dubai is now 2.5 days: half a day from noon on Friday, plus Saturday and Sunday and there are no personal or income taxes in Dubai, having one of the famous land marks as the Burj Khalifa is a perfect destination if you like a warm weather and a modern city.", id: 'cit6' },
//     { url: "/images/luxemburg-big.png", city: "Luxenbourg city", country: "Luxenbourg", text: "Luxembourg is one of the smallest countries in the world, but it doesn't fall behind other countries in history, culture, and architecture. Having a romantic atmosphere you can taste-award winning wines in one of the safest countries in the world, walk through 17km of underground tunnels and submerge yourself in this European country. Come and visit it!", id: 'cit7' },
//     { url: "/images/bogota-big.png", city: "Bogota", country: "Colombia", text: "This city is known as the Athens of America because it's the center of education, finance, and culture just like Athens. Bogota is awesome place to visit as a tourist. There are more than 50 museums, 37 libraries, public squares, churches, and a ton of monuments, you must try its typical food and experience the warmth welcome of its citizens. You are more than welcome to visit! ", id: 'cit8' },
//     { url: "/images/kyoto-big.png", city: "Kyoto", country: "Japan", text: "This city is known as Japan's spiritual heart. Full of ancient history, culture, and heritage you can visit up to 3000 temples and shrine, iconic ones like the Fushimi-Inari-Taisha considered national treasures. One is the best-preserved city in Japan is the perfect place to surround yourself with aetheric scenes and mystique. Come and discover this amazing destination.", id: 'cit9' },
//     { url: "/images/athens-big.png", city: "Athens", country: "Greece", text: "Athens is Europe's oldest capital, also it is making it one of the oldest cities in the world, there is the most important temple, The Parthenon, was built in marble between 444 and 432 B.C. Athens has the longest coastline in Europe and it has won awards for its clean beaches and clean water, also have some botanical gardens that are open to the public.", id: 'cit10' },
//     { url: "/images/cairo-big.png", city: "Cairo", country: "Egypt", text: "Cairo, the capital city of Egypt and the largest city in the Arab world, is full of incredible places with a diverse culture and cuisine. Home of the only world wonder that remains standing from the original list of seven, the largest food court in the world. If you want to experience a time full of wonder, history, and dive into the ancient world of pharaohs, this is the city for you", id: 'cit11' },
//     { url: "/images/sydney-big.png", city: "Sydney", country: "Australia", text: "This beautiful city has so much to offer, you can visit its world-famous harbor, see the stunning natural scenery of the Blue Mountains, if what you seek is a thriving culture full of arts, and nightlife scenes, with iconic landmarks like the Sydney Opera House, the Harbor Bridge and Bondi Beach, this is the city for you. ", id: 'cit12' },
// ]

export default function Cities() {

    
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
        axios.get('http://localhost:4000/cities/?city='+search)
            .then(response =>{
                setCities(response.data.response)
                console.log(response.data) 
            } 
            )  
            
    },  [search])

    const cityPic = (item) => (
        <LinkRouter className='cityRouter' key={item._id} to={`/details/${item._id}`}>
            <div className="cityCard">
                <img className='imgCard' src={item.photo} alt='img' />
                <h3>{item.city}</h3>
                <p>{item.intro}</p>
    
            </div>
        </LinkRouter>
    )


    return (
        <div className='iteration'>
            <div>
                <form>
                <label>Search</label>
                <input type="text" name="" onKeyUp={handleSearch}/>
            </form>
            </div>
            <div>
                {cities.map(cityPic)}
            </div>
        </div>
    )
}
