import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

function App() {
  const siblings = ['Riyad', 'Fazlay', 'Sabbir', 'Mansura'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.88'},
    {name: 'Premiere El', price: '$249.99'}
  ];
  const productNames = products.map(product => product.name);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            siblings.map(sibling => <li>{sibling}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          <li>{siblings[0]}</li>
          <li>{siblings[1]}</li>
          <li>{siblings[2]}</li>
          <li>{siblings[3]}</li>
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna" job="Doctor"></Person>
        <Person name="Masum" job="Teacher"></Person>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
    const productStyle={
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      height: '200px',
      width: '200px',
      float: 'left'
    }
    const {name, price} = props.product;
    return (
      <div style={productStyle}>
          <h3>{name}</h3>
          <h5>{price}</h5>
          <button>Buy Now</button>
      </div>
    )
}
function Person(props){
  return (
    <div style={{border: '2px solid green', width:'400px'}}>
      <h3>Name: {props.name} </h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(7);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default App;
