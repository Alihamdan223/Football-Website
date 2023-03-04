import React, {useState} from 'react'; 
import Roster from "./Roster";

const SquadInfo = () => {
    const [toggleit, setToggleIt] = useState(true);
    
    return (
        <section className="squad--section">
            <h2>Roster</h2>
            <button onClick={() => setToggleIt(!toggleit)}>{!toggleit?"Show The Roster":"Hide The Roster"}</button>
            {toggleit && 
                <Roster />
            }
        </section>
    )
}

export default SquadInfo;