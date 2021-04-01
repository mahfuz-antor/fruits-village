import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
// import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Management from '../Management/Management';


const FruitDetails = () => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/fruitDetail')
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])

    // console.log(detail);
    // useEffect(() => {
    //     fetch('http://localhost:5000/fruitDetail')
    //         .then(res => res.json())
    //         .then(data => setFruitDetail(data))
    // }, [])

    const { id } = useParams();
    const fruit = detail.find(pd => pd._id === id)
    console.log(fruit);

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        // const savedCart = getDatabaseCart();
        const orderDetails = {...loggedInUser, product: fruit, shipment: data, orderTime: new Date()};
        console.log(setLoggedInUser);
  
        fetch('http://localhost:5000/addOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            // processOrder();
            alert('Your Order Submitted Successfully.')
          }
        })
  
      };

    return (
        <div className="container">
            <Header></Header>
            {/* <h1>This is FruitDetail Page.{id}</h1> */}
            {/* <div>
                <h2>
                    <span> <strong>Name: {fruit?.name}</strong> </span>
                    <span>  Quantity: 1  </span>
                    <span>  Price: $45 </span>
                </h2>
                <button>Checkout</button>
            </div> */}
            {/* <h3>Name: {fruit.name}</h3> */}
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fruit Name:</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{fruit?.name}</td>
                        <td> 1 </td>
                        <td> {fruit?.price} </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td> <input type="submit" /> </td>
                    </tr>
                </tbody>
            </table>
            
    </form>

        </div>
    );
};

export default FruitDetails;