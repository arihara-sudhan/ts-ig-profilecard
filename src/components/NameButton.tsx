type NameButtonPropsType = {
    name: string,
    handleFollow: (e: React.MouseEvent<HTMLButtonElement>)=>void
}

const NameButton : React.FC<NameButtonPropsType> = (props) => {
    return <div>
            <h2>{props.name}</h2>
            <button onClick = {props.handleFollow}>Follow</button>
    </div>
}

export default NameButton;