import React from "react";
import CardItem from "./CardItems";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out this EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-11.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-3.jpg"
                            text="Set sail in the Atlantic Ocean"
                            label="Mystery"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-4.jpg"
                            text="Experience football on the top of mountaion"
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem 
                            src="images/img-8.jpg"
                            text="Ride through the Sahara Desert via camel tour"
                            label="Adrenaline"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;