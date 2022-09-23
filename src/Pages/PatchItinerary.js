import ItineraryDelete from "../Components/ItineraryDelete";
import ItineraryEdit from "../Components/ItineraryEdit";

export default function PatchItinerary() { 
    return(
        <div className="Itinerary">
        <ItineraryEdit />
        <ItineraryDelete />
        </div>
    )
}
