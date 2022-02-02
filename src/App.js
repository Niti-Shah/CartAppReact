import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import React, {useState} from 'react'
import AddItem from './Components/AddItem';

function App() {
  const prodts =[
    {
      price: 55555,
      name: "iPhone 13 Pro",
      quantity: 0
    },
    {
      price: 33333,
      name: "OnePlus 8 Pro",
      quantity: 0
    }
  ]

  let [productList , setProductList] = useState(prodts);
  let [totalAmount , setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++
    newTotalAmount = newTotalAmount + newProductList[index].price
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0)
    {
      newProductList[index].quantity--
      newTotalAmount = newTotalAmount - newProductList[index].price
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
  }


  const resetQuantity = () => {
    let newProductList = [...productList]
    newProductList.map((products) => {
      products.quantity = 0
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index, 1)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
  }

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList)
  }


  return (
    <>
    <Navbar />
    <AddItem addItem={addItem}/>
    <main className='container mt-5'>
      <ProductList prodList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
