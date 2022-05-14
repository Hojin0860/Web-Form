import logo from '../logo.svg';
export default function Product({title, price, count, selected, onChange, moveToDetail}) {
    return (
        <div>
            <div>
                <label>{`Title: ${title}`}</label>
            </div>  
            <div>
                <label>{`Price: ${price}`}</label>
            </div>
            <div onClick={moveToDetail}>
                <img src={logo}  alt={"alt"}/>
            </div>
            <div>
                <label>{`count: `}</label> 
                <input type="number" name="count" value={count} onChange={onChange}/>
            </div>
            <div>
            <input type="checkbox" name="selected" checked={selected} onChange={onChange}/>
            </div>
            
        </div>
    )
}