import '../Styles/Carousel.css';

function Carousel (props){

 const range = 4
 
 const start = 5

 const end = start + range

 const items = props.data

  const itemView = (item) => (
    <div className="item">
      <img src={item.url}/>
      <p>{item.city}</p>
    </div>
  )
  
  return (
    <div className="Slice">
      {items.slice(start, end).map(itemView)}
    </div>
  )
}

export default Carousel