import React,{useState,useEffect} from "react";
import * as yup from 'yup';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import {schema} from './validation/schema';
const initialFormValues ={
  name:'',
  size:'',
  pepperoni:false,
  sausage:false,
  blackOlives:false,
  greenPepper:false,
  specialText:''
};
const App = () => {
  const [formValues,setFormValues] = useState(initialFormValues);
  const [errors,setErrors] = useState(Object.keys(initialFormValues).reduce((acc,key)=>({...acc,[key]:''}),{}));
  const [isValid,setIsValid] = useState(null);
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
      <h1>Lambda Eats</h1>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/pizza'>
          <Form formValues={formValues} updateFormValues={updateFormValues} isValid={isValid} errors={errors}></Form>
        </Route>
      </Switch>
    </>
  );
};
export default App;
