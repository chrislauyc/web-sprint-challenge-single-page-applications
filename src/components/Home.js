// button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza"
import React from 'react';
import {Link} from 'react-router-dom';
function Home(props){
    const{setIsSubmitted}=props;
    return(
        <div onClick={()=>setIsSubmitted(false)}>
            <Link to='/pizza' id='order-pizza'>Order Pizza</Link>
        </div>
    );
}
export default Home;