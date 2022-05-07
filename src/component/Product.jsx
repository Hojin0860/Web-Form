export default function Product({title, price, count, selected, onChange}) {
    return (
        <div>
                <label>{`Title: ${title}`}</label>
            <div>
                <label>{`Price: ${price}`}</label>
            </div>
            <div>
                <label>{`count: `}</label> 
                <input type="text" name="count" value={count} onChange={onChange}/>
            </div>
            <input type="checkbox" name="selected" checked={selected} onChange={onChange}/>
        </div>
    )
}