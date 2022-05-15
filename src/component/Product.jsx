import logo from '../logo.svg';
export default function Product({title, price, count, selected, onChange, moveToDetail, imgSrc, imgAlt}) {
    return (
        <div className="flex justify-center">
            <div className="rounded-none shadow-lg bg-white max-w-sm grid content-between ">
                <div>
                    <a href="#!" onClick={moveToDetail}>
                        <img className="rounded-none" src={imgSrc} alt={imgAlt}/>
                    </a>
                </div>

                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {`판매가격: ${price}`}
                    </p>
                    <input type="number" name="count" value={count} onChange={onChange}/>
                        <input type="checkbox"
                               className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                name="selected"
                               checked={selected} onChange={onChange}/>
                </div>
            </div>
        </div>
    )
}