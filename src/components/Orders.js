import React from 'react';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
function Orders(props){
    const {orders,initialFormValues} = props;
    return(
        <div>
            <h3>Thank you for your purchase</h3>
            <h3>Your Order(s)</h3>
            {
                orders.map((order,i)=>(
                    <div key={uuid()}>
                        <label>
                            Order {i+1}:
                        </label>
                        <ul key={uuid()}>

                            {
                                Object.keys(initialFormValues).map((key)=>
                                {
                                    return order[key]?<li key={uuid()}>{order[key]}</li>:'';
                                })
                            }   
                        </ul>
                    </div>
                ))
            }
            <Link to='/'>Back to Home</Link>
        </div>
    );
}
export default Orders;