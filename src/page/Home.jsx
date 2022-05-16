import { useState } from 'react';
import { useNavigate, useLocation} from "react-router-dom";
import Product from '../component/Product';

import { productsData } from "../data/products";

import _ from 'lodash';
import Header from "../component/Header";
import BookForm from "../component/BookForm";

export default function Home(props) {
  let navigate = useNavigate();
  let location = useLocation();
    const [products, setProducts] = useState(() => !_.isEmpty(location.state?.products) ? [...location.state.products] : [...productsData]);
    const [needCurrencyBill, setCurrencyBill] = useState(false);
    const [consumer, setConsumer] = useState({"name": "", "email": "", "address":"", "addressDetail":"", "phone":""});

    const setProduct = id => event => {
      
      let newProducts = [...products]
      const target = event.target;
      if (target.name === "selected") {
          const count = (newProducts[id].count === 0) ? 1 : newProducts[id].count
          newProducts[id] = {...newProducts[id], "selected": count > 0 ? !newProducts[id].selected : false, "count": !newProducts[id].selected? count: 0}
      } 
      if (target.name === "count") {
        const count = _.isEmpty(target.value) ? 0 : _.toNumber(target.value);
        const selected = _.toNumber(target.value) !== 0
  
        newProducts[id] = {...newProducts[id], "count": count <= 0 ? 0 : count, "selected": selected}
      }
      setProducts(newProducts);
    }

    const calcPrice = () => {
        let deliveryFee = 3000
        let price = calcRawPrice();
        if (price === 0) {
            return 0
        }

        if (price < 60000) {
            price += deliveryFee
        }

        return price
    }
    const calcRawPrice = () => {
        return products.filter(p => p.selected).map(p => p.price * p.count).reduce((acc, v) => acc += v, 0);
    }

    const moveToDetail = (id) => () => {
      navigate(`../products/${id}`, {state: {products: products}})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("consumer", consumer)
        console.log("products", products)
        console.log(`needCurrencyBill=${needCurrencyBill}`)
    }

    return (
        <div>
            <Header/>
            <div className={"grid grid-cols-4 divide-x"}>
                {
                    products.map((product, index) =>
                        <Product {...product} key={product.id} onChange={setProduct(index)} moveToDetail={moveToDetail(index)}/>)
                }
            </div>
            <div className={"grid-cols-2"}>
                <div className="mt-10 flex justify-center">
                    <input checked={needCurrencyBill} id="checked-checkbox" type="checkbox" name="needCurrencyBill" onChange={() => setCurrencyBill(!needCurrencyBill)}
                           className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checked-checkbox"
                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{"현금 영수증 여부"}
                        </label>
                </div>
                <div
                    className="mt-10 p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{"최종금액"}</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-5xl font-extrabold tracking-tight">{calcPrice()}</span>
                        <span className="text-3xl font-semibold">{"원"}</span>

                    </div>
                    <ul role="list" className="my-7 space-y-5">
                        {
                            (calcRawPrice() < 60000) && (                        <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{"배송비 3000원"}</span>
                            </li>) ||                         <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500">{"배송비 3000원"}</span>
                            </li>
                        }


                    </ul>
                </div>
            </div>

            <BookForm consumer={consumer} setConsumer={setConsumer}/>
            <button type="submit" onClick={submitHandler}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </div>
    )
}
