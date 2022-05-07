
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './component/Input';
import Product from './component/Product';
import Modal from './component/Modal';
import ModalPortal from './component/ModalPortal';
import _ from 'lodash';

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [products, setProducts] = useState([
    {"id": 1, "title": "모퉁이뜨개방", "price": 31000, "count": 0, "selected": false},
    {"id": 2, "title": "소장", "price": 17000, "count": 0, "selected": false},
    {"id": 3, "title": "책갈피", "price": 3000, "count": 0, "selected": false},
    {"id": 4, "title": "어드벤트캘린더", "price": 26000, "count": 0, "selected": false}
  ]);
  const [needCurrencyBill, setCurrencyBill] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(name, address, phone)
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
        console.log("selected changeVale", count)
        const count = (newProducts[id].count == 0) ? 1 : newProducts[id].count
        newProducts[id] = {...newProducts[id], "selected": !newProducts[id].selected, "count": count} 
    } 
    if (target.name === "count") {
      const count = _.isEmpty(target.value) ? 0 : _.toNumber(target.value);
      const selected = _.toNumber(target.value) === 0 ? false : true

      newProducts[id] = {...newProducts[id], "count": count, "selected": selected} 
    }
    setProducts(newProducts);
  }
  console.log("redraw")
  return (
    <div className="App">
      <div>
        <p>예금주 : 강소영</p>
        <p>계좌번호: 우리은행 1002-529 619302</p>
      </div>
      <form onSubmit={submitHandler}>
         <Input type="text" title="이름" value={name} onChange={(event) => setName(event.target.value)}/>
         <button  onClick={openModal}>{"click"}</button>
         <Input type="text" title="주소" value={address} onChange={(event) => setName(event.target.value)}/>
         <Input type="tel" title="전화번호" value={phone} onChange={(event) => setPhoneNumber(event.target.value)}/>
         <ModalPortal>
            <Modal isOpen={isOpen} callback={modalComplete} />
         </ModalPortal>
         {products.map((product, index) => {
          return <Product {...product} key={product.id} onChange={setProduct(index)}/>
         })}
         <label>{"현금 영수증 여부 : "}</label><input type="checkbox" name="needCurrencyBill" value={needCurrencyBill} onChange={() => setCurrencyBill(!needCurrencyBill)} />
         <button type="submit">{"제출하기"}</button>
      </form>
      <div>
        <label>{`최종금액 : ${calcPrice()}`}</label>
      </div>
    </div>
  );
}

export default App;
