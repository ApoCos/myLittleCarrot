import React, { Component } from 'react'
import Count from '../count/Count'

class Cards extends Component {
    render () {
        const {cardsDetails} = this.props
       return (
        <div className="cardsPage">
            <div className="cardContent">
            <div classname="cardImage">
                <div className="rectangle">
                <img src={cardsDetails.photo} alt={cardsDetails.className}></img> 
                </div>
            </div>
            <div className="nameItem">
            <p>{cardsDetails.name}</p>
            </div>
            <div className="cardDescription">
                <p>{cardsDetails.description}</p>
            </div>
            <div className="tarifs">
                <p>{cardsDetails.price} euro</p>
            </div>
            </div>
            <Count/>
            <button>Ajouter au panier</button>
        </div>
    );
};
}

export default Cards;