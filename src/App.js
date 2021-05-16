import React,{useState,useEffect} from "react";
import * as yup from 'yup';
import axios from 'axios';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Orders from './components/Orders';
import {schema} from './validation/schema';
import styled from 'styled-components';
const initialFormValues ={
  name:'',
  size:'',
  pepperoni:false,
  sausage:false,
  blackOlives:false,
  greenPepper:false,
  glutenFree:false,
  specialText:''
};
const App = () => {
  const [formValues,setFormValues] = useState(initialFormValues);
  const [errors,setErrors] = useState(Object.keys(initialFormValues).reduce((acc,key)=>({...acc,[key]:''}),{}));
  const [isValid,setIsValid] = useState(null);
  const [networkStatus,setNetworkStatus] = useState(true);
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [orders,setOrders] = useState([]);
  const submitForm=()=>{
    axios.post('https://reqres.in/api/orders',formValues)
    .then((r)=>{
      setOrders([...orders,r.data]);
      setFormValues(initialFormValues);
      setNetworkStatus(true);
      setIsSubmitted(true);
    })
    .catch(()=>setNetworkStatus(false));
  };
  const updateFormValues =(key,value)=>{
    setFormValues({...formValues,[key]:value});
    yup.reach(schema,key)
    .validate(value)
    .then(()=>{
      setErrors({...errors,[key]:''});
    })
    .catch((e)=>{
      setErrors({...errors,[key]:e.errors[0]})
    });
  };
  useEffect(()=>{
    schema.isValid(formValues)
    .then(valid=>{
      setIsValid(valid);
    })
  },[formValues]);
  return (
    <>
      <StyledH1>Pizza</StyledH1>
      <Switch>
        <Route exact path='/'>
          <Home setIsSubmitted={setIsSubmitted}></Home>
        </Route>
        <Route path='/pizza/success'>
          <Orders orders={orders} initialFormValues={initialFormValues}></Orders>
        </Route>
        <Route path='/pizza'>
          <Form formValues={formValues} updateFormValues={updateFormValues} isValid={isValid} errors={errors} submitForm={submitForm} networkStatus={networkStatus}></Form>
          {isSubmitted?<Redirect to='/pizza/success'/>:''}
        </Route>
      </Switch>
    </>
  );
};
export default App;
const StyledH1 = styled.h1`
  text-align:center;
`;