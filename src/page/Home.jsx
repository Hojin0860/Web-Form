import { useState } from 'react';
import { useNavigate, useLocation} from "react-router-dom";
import Product from '../component/Product';

import { productsData } from "../data/products";

import _ from 'lodash';
import Header from "../component/Header";

export default function Home(props) {
  let navigate = useNavigate();
  let location = useLocation();
    const [products, setProducts] = useState(() => !_.isEmpty(location.state?.products) ? [...location.state.products] : [...productsData]);
  
    const setProduct = id => event => {
      
      let newProducts = [...products]
      const target = event.target;
      if (target.name === "selected") {
          const count = (newProducts[id].count === 0) ? 1 : newProducts[id].count
          newProducts[id] = {...newProducts[id], "selected": !newProducts[id].selected, "count": count} 
      } 
      if (target.name === "count") {
        const count = _.isEmpty(target.value) ? 0 : _.toNumber(target.value);
        const selected = _.toNumber(target.value) !== 0
  
        newProducts[id] = {...newProducts[id], "count": count, "selected": selected} 
      }
      setProducts(newProducts);
    }

    const calcPrice = () => {
        let deliveryFee = 3000
        let price = products.filter(p => p.selected).map(p => p.price * p.count).reduce((acc, v) => acc += v, 0);
        if (price === 0) {
            return 0
        }

        if (price < 60000) {
            price += deliveryFee
        }

        return price
    }

    const moveToDetail = (id) => () => {
      navigate(`../products/${id}`, {state: {products: products}})
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
        </div>
    )
}
