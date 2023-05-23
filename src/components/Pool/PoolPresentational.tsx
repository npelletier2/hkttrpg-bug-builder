import EditableHeader from "./EditableHeader";
import "./PoolStyle.css";

const PoolPresentational = 
(props: {
    name: string,
    onChangeToDisplay: (title:string)=>void,
    tempName: string,
    data: {
        max: number,
        curr: number,
        temp: number
    },
    changeMax: React.ChangeEventHandler<HTMLInputElement>,
    changeCurr: React.ChangeEventHandler<HTMLInputElement>,
    changeTemp: React.ChangeEventHandler<HTMLInputElement>,
}) => {
    return(
        <div className="poolDiv">
            <EditableHeader onChangeToDisplay={props.onChangeToDisplay} name={props.name} />

            <h4 className="boxHeader">max</h4>
            <h4 className="boxHeader">current</h4>
            <h4 className="boxHeader">{props.tempName}</h4>

            <input className="pool smallPool leftPool" type="number" value={props.data.max} onChange={props.changeMax} />
            <input className="pool largePool" type="number" value={props.data.curr} onChange={props.changeCurr} />
            <input className="pool smallPool rightPool" type="number" value={props.data.temp} onChange={props.changeTemp} />
        </div>
    )
}

export default PoolPresentational;