import "./Card.css";
import cardInterface from "../../interfaces/card"

// function Card({ status, photo, rating, country, description, price, priceBase }: cardInterface){
// function Card(props) { props.status
function Card( { data }: { data: cardInterface }){

    let status = 'ONLINE'
    if (parseInt(data.openSpots) <= 0) {
        status = 'SOLD OUT'
    }

    return (
        <div>
            <div className="photo-container">
                <img className="photo" src={data.photo}></img>
                <p className="photo--status_text">{status}</p>
                <img className="photo--star" src="src\assets\star-1.png"></img>
                <span>{data.rating}</span>
                <span className="gray">(6) • </span>
                <span className="gray">{data.country}</span>
            </div>
            <p>{data.description}</p>
            <p><span className="bold">From {data.price}</span> / {data.priceBase}</p>
        </div>
    )
}

export default Card