import "./Pools.css";
import { useState } from "react";
import PoolDiv from "./PoolDiv.tsx";

let id = 3;

const Pools = 
(props:
    any
) => {
    const [pools, setPools] = useState<{[index: number]: string}>({
        0: "Heart",
        1: "Soul",
        2: "Stamina"
    });

    function deletePool(key: number){
        console.log(`delete id ${key}`);
        delete pools[key];
        setPools({...pools});
    }

    function addPool(){
        console.log(`add id ${id}`);
        setPools({...pools, [id]: "New Pool"})
        id++;
    }

    function constructElements(){
        console.log(pools);
        const elements: JSX.Element[] = [];
        for(const prop in pools){
            const thisid = parseInt(prop);
            const thisname = pools[thisid];
            elements.push(<PoolDiv name={thisname} id={thisid} delete={deletePool} key={thisid} />);
        }
        console.log(elements);
        return elements;
    }

    const ret = (
        <div className="poolsdiv">
            {constructElements()}
            <button onClick={addPool} className="addPoolButton">+</button>
        </div>
    );

    return ret;
}

export default Pools;