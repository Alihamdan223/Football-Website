import React, {useState} from 'react';
import Squad_Data from "./Squad_Data";
import MapComp from "./MapComp"; 

const Roster = () => {

    const [playerdata, setPlayerData] = useState(Squad_Data); 

    return (
        <div className="the--roster">
        {
           playerdata.map((player,index) => {
                return <section className="ano-section" key={index}>
                    <MapComp 
                    player={player}
                    />
                    </section>
            })
        } 
        </div>
    )
}

export default Roster;