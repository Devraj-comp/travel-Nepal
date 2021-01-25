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
                            text="Trek through the highest base camps of the world"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="images/pokhara.jpg"
                            text="Boat and let your body full of relaxtion in silence"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/tsho.jpg"
                            text="Trek through the pure breeze of TshoRolpa lake"
                            label="Mystery"
                            path="/services"
                        />
                        <CardItem 
                            src="images/bungee.jpg"
                            text="Bungee and hava a life long experience in The Last Resort"
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem 
                            src="images/paraglide.jpg"
                            text="Paraglide within a marvellous view of Pokhara"
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