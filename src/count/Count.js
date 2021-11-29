import React from 'react'
import { useState } from 'react';

export default function Count() {
      
    //  on initialise le state avec une valeur de 0 par défaut
    const [count, setCount] = useState(0);

    return (
        <div className="counts">
    {/*On crée le bouton de décrémentation*/}
        <button className="countButton" onClick={() => setCount(count -1)}>
            -
        </button>

    {/*On affiche le compteur*/}
        <p>{count}</p>
    
    {/*On crée le bouton d'incrémentation*/}
        <button className="countButton" onClick={() => setCount(count +1)}>
            +
        </button>
        </div>
    )
}
