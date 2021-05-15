import React,{useState} from "react";
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
const initialFormValues ={
  name:'',
  size:'',
  pepperoni:false,
  sausage:false,
  blackOlives:false,
  greenPaper:false,
  specialText:''
};
const App = () => {
  const [formValues,setFormValues] = useState(initialFormValues);
  const updateFormValues =(key,value)=>{
    setFormValues({...formValues,[key]:value});
  };
  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/pizza'>
          <Form formValues={formValues} updateFormValues={updateFormValues}></Form>
        </Route>
      </Switch>
    </>
  );
};
export default App;
