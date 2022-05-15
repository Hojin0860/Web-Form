import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Account from './page/Account';
import ProductDetail from './page/ProductDetail';
import SoyoungForm from "./page/SoyoungForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<SoyoungForm/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
          <Route path="/success" element={<Account/>}/>
      </Routes>
    </div>
  );
}

export default App;
