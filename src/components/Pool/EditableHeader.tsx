import { useState, useEffect } from "react";
import "./PoolStyle.css"

const EditableHeader =
(props: {
    name?: string,
    onChangeToDisplay?: (title:string)=>void,
    onChangeToEdit?: (title:string)=>void,
    onHeaderChange?: (title:string)=>void
}) => {
    let initName = "";
    if(props.name){
        initName = props.name;
    }
    const [name, setName] = useState(initName);
    const [isInEditState, setIsInEditState] = useState(false);
    useEffect(() => {
        props.onHeaderChange?.(name);
        props.onChangeToDisplay?.(name);
    })

    function handleHeaderChange(e: React.FormEvent<HTMLInputElement>): void{
        setName(e.currentTarget.value);
        props.onHeaderChange?.(name);
    }

    function toDisplay(e: React.FormEvent<HTMLFormElement>): void{
        e.preventDefault();
        setIsInEditState(false);
        props.onChangeToDisplay?.(name);
    }

    function toEdit(e: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void{
        e.preventDefault();
        setIsInEditState(true);
        props.onChangeToEdit?.(name);
    }

    const editState = (
        <form className="editTitleForm" onSubmit={toDisplay}>
            <input className="editTitleInput" type="text" value={name} onChange={handleHeaderChange} />
            <input className="editTitleSubmit" type="submit" value="OK" />
        </form>
    );

    const headerState = <h3 className="poolHeader" onClick={toEdit}>{name}</h3>;

    return isInEditState ? editState : headerState;
}

export default EditableHeader;