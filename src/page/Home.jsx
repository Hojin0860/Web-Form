import { useState } from 'react';
import { useNavigate, useLocation} from "react-router-dom";
import Input from '../component/Input';
import Product from '../component/Product';
import Modal from '../component/Modal';
import ModalPortal from '../component/ModalPortal';
import Button from '@mui/material/Button';
import { productsData } from "../data/products";

import _ from 'lodash';

export default function Home(props) {
  let navigate = useNavigate();
  let location = useLocation();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [products, setProducts] = useState(() => !_.isEmpty(location.state?.products) ? [...location.state.products] : [...productsData]);
    const [needCurrencyBill, setCurrencyBill] = useState(false);
    const [isOpen, setOpen] = useState(false);

  
    const submitHandler = (event) => {
      event.preventDefault()
      navigate("../success")
    }
  
    const openModal = (event) => {
      event.preventDefault()
      setOpen(true)
    }
  
    const modalComplete = (address) => {
      setAddress(address)
      setOpen(false)
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

    const moveToDetail = (id) => () => {
      navigate(`../products/${id}`, {state: {products: products}})
    }

    return (
    <div>
        <form onSubmit={submitHandler}>
         <Input type="text" title="이름" value={name} onChange={(event) => setName(event.target.value)}/>
         <Button variant="contained" onClick={openModal}>{"주소조회"}</Button>
         <Input type="text" title="주소" value={address} onChange={(event) => setAddress(event.target.value)}/>
         <Input type="text" title="상세주소" value={addressDetail} onChange={(event) => setAddressDetail(event.target.value)}/>
         <Input type="tel" title="전화번호" value={phone} onChange={(event) => setPhoneNumber(event.target.value)}/>
         <ModalPortal>
            <Modal isOpen={isOpen} callback={modalComplete} />
         </ModalPortal>
          <div className={"grid grid-cols-4 divide-x"}>
            {
              products.map((product, index) =>
                  <Product {...product} key={product.id} onChange={setProduct(index)} moveToDetail={moveToDetail(index)}/>)
            }
          </div>


         <label>{"현금 영수증 여부 : "}</label><input type="checkbox" name="needCurrencyBill" checked={needCurrencyBill} onChange={() => setCurrencyBill(!needCurrencyBill)} />
         <Button variant="contained" type="submit">{"제출하기"}</Button>
      </form>
      <div>
        <label>{`최종금액 : ${calcPrice()}`}</label>
      </div>
    </div>
    )
}