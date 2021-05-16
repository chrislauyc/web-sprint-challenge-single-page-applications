// button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza"
import React from 'react';
import {Link} from 'react-router-dom';
import {Button,Grid} from '@material-ui/core';
function Home(props){
    const{setIsSubmitted}=props;
    return(
        <Grid container justify='center' onClick={()=>setIsSubmitted(false)}>
            <Button component={Link} to='/pizza' id='order-pizza'>Order Pizza</Button>
        </Grid>
    );
}
export default Home;