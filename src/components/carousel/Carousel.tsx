import "./Carousel.css";
import Card from "../card/Card";
import cardInterface from "../../interfaces/card"
import cardInfoData from "../../data/data";

function Carousel() {

    const carouselItem = cardInfoData.map((card: cardInterface) => (
        <div id={card.id} className="carousel--item">
            <Card data = {card} />
        </div>
    ));


    return (
        <div  className="carousel">
            {/* <div className="carousel--item"> */}
                {/* <Card {...cardInfoData1} /> */}
                {/* <Card 
                    img="katie-zaferes.png"
                    rating="5.0"
                    reviewCount={6}
                    country="USA"
                    title="Life Lessons with Katie Zaferes"
                    price={136}
                /> */}
                {/* <Card data = {cardInfoData1} /> */}
                {carouselItem}
            {/* </div> */}
        </div>
    )
}

export default Carousel