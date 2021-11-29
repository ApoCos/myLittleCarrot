import React from "react";
import Cards from "../cards/Cards";
import bdd from "../cards/bdd.json";
import Burger from "../navigation/Burger";
import Navigation from "../navigation/Navigation";

function Shop() {

    return (
        <div className="shopPage">
        <header>
        <Navigation/>
        <Burger/>
        </header>
        <div className="shopBody">
            {bdd.map((vegetablesDetails, index) => {
                return <Cards cardsDetails={vegetablesDetails}/>
            })}
        </div>
    </div>
    );
}

export default Shop;