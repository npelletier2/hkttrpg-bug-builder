import { useState } from "react";
import PoolPresentational from "./PoolPresentational";

const Pool = 
(props: {
    name: string,
}) => {
    const [data, setData] = useState({max: 0, curr: 0, temp: 0});

    function changeMax(e: React.ChangeEvent<HTMLInputElement>): void{
        let max;
        let curr = data.curr;

        const value = parseInt(e.target.value);
        if(!isNaN(value) && value >= 0){
            max = value;
            if(data.curr > value) curr = value;
            setData({...data, curr, max});
        }
    }

    function changeCurr(e: React.ChangeEvent<HTMLInputElement>): void{
        const value = parseInt(e.target.value);
        if(!isNaN(value) && value <= data.max && value >= 0) setData({...data, curr: value});
    }

    function changeTemp(e: React.ChangeEvent<HTMLInputElement>): void{
        const value = parseInt(e.target.value);
        if(!isNaN(value) && value >= 0) setData({...data, temp:value});
    }

    //used for header editing
    const [tempName, setTempName] = useState("glory");

    function onChangeToDisplay(name: string): void{
        const tName = name.toLowerCase() === "heart" ? "lifeblood" : "glory";
        setTempName(tName);
    }

    return(
        <PoolPresentational name={props.name} tempName={tempName} data={data}
                            changeMax={changeMax} changeCurr={changeCurr} changeTemp={changeTemp}
                            onChangeToDisplay={onChangeToDisplay} />
    )
}

export default Pool;