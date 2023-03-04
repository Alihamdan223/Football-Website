import React, {useState} from "react"; 

const MapComp = (props) => {

    const [show, setShow] = useState(false);

    const [stylez, setStylez] = useState({
        height: show ? "210px" : null,
    });

    return (
        <div key={props.player.id}>
        <img src={props.player.imgURL} className="the-poster" onClick={() => setShow(!show)} alt="fcbplayer" />       
        {show && <div className="player-details">
        <h3>{props.player.name}</h3>
        <h4>{props.player.position}</h4>
        {show && <div className="player-data" style={stylez}>
        <p><span style={{fontWeight: 'bold'}}>Age: </span>{props.player.age}</p>
        <p><span style={{fontWeight: 'bold'}}>Number: </span>{props.player.number}</p>
        <p><span style={{fontWeight: 'bold'}}>Height: </span>{props.player.height} cm</p>
        </div>}
        </div>}
        </div>
    )
}

export default MapComp; 