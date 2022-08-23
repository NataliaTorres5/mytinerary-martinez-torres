import { useEffect, useState } from 'react';
import '../Styles/Carousel.css';
import Arrow from './Carousel/Arrow';


function Carousel(props) {

  const range = props.range
  const limitSlides = (props.slides * range)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + range)
  const [intervalId, setIntervalId] = useState()
  const items = props.data
  const interval = props.interval * 1000

  const itemView = (item) => (
    <div className="item">
      <img src={item.url} />
      <p>{item.city}</p>
    </div>
  )



    useEffect(() => {
      let id = setInterval(function () {
          next()
      }, interval)

      setIntervalId(id)

      return () => clearInterval(id)
  }, [start])

  function previous() {
    if (start >= range) {
        setStart(start-range)
        setEnd(end-range)
    } else {
        setStart(limitSlides-range)
        setEnd(limitSlides)
    }
    clearInterval(intervalId)
}

function next() {
    if (start < limitSlides-range) {
        setStart(start+range)
        setEnd(end+range)
    } else {
        setStart(0)
        setEnd(range)
    }
    clearInterval(intervalId)
}


  return (
    <div className="Slice">
      <Arrow icon="<" click={previous} />
      {items.slice(start, end).map(itemView)}
      <Arrow icon=">" click={next} />
    </div>
  )
}

export default Carousel