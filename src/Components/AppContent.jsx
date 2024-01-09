import React from "react";
import './Appcontent.css';
import Cards from "./Cards";

const AppContent  = () => {

    const cards = [
        {   title: "Weekly Balance", 
            subtitle: "26k", 
            imgPath: require('../assets/purse.png'), 
            backgroundcolor: "#85FFBD",
        },
        {   title: "Orders In Line", 
            subtitle: "757", 
            imgPath: require('../assets/received.png'),
            backgroundcolor: "#F7CE68"
        },
        {   title: "New Clients", 
            subtitle: "159", 
            imgPath: require('../assets/man.png'),
            backgroundcolor: "#E0C3FC"
        },
    ]
    return(
        <div className="app-content">
            <h1>Hello, Karim</h1>
            <div className="cards-list">
                {cards.map((card, key) => (
                    <Cards key={key} data={card} />
                ))} 
            </div>
        </div>
    )
}

export default AppContent