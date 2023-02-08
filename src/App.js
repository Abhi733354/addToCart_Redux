import logo from './logo.svg';
import './App.css';
import React,{BrowserRouter, Route, Routes} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Book  from './components/books/Books';
// import Cart from './components/cart/Cart';
// import Order from './components/order/Order';
import UserLogin from './components/User/Userlogin';
import UserRegister from './components/User/UserRegister';
import Booklist from './components/Booklist/Booklist';
import Order from './components/orders/Order';
import Cart from './components/cart/Cart';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<UserLogin/>}/>
      <Route path='/register' element = {<UserRegister/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/order/:id' element = {<Order/>}/>
      <Route path='/book/:id' element = {<Book/>}/>
      <Route path='/booklist' element = {<Booklist/>}/>
      <Route path='/order' element = {<Order/>}/>

      </Routes>
      </BrowserRouter>

  </div>
  

   
  );
}

export default App;
