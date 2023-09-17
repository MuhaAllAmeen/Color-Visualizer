import './Hex.css';

function Hex(props){
    return(
        <div>
            <h1 className="hex" >{props.hexString}</h1>
        </div>
    )
}

export default Hex;