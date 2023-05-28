import Pool from "../../components/Pool/Pool";

const PoolDiv = (props:{
    name: string,
    id: number,
    delete: (key:number)=>void
}) => {
    const ret = (
        <div className="pooldiv">
            <Pool name={props.name} />
            <button className="deleteButton" onClick={() => props.delete(props.id)}>-</button>
        </div>
    )

    return ret;
}

export default PoolDiv;