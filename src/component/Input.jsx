
export default function Input(props) {
    return (
        <div>
            <label>{`${props.title} : `}</label>
            <input type={props.type} onChange={props.onChange} value={props.value}/>
        </div>
    )
}