import React from 'react';
import {TextField} from '@material-ui/core';
function Form(props){
    const {
        formValues,updateFormValues,isValid,errors,submitForm,networkStatus
    } = props;
    const onChange =(e)=>{
        const {name,type,value,checked} = e.target;
        if(type==='checkbox'){
            updateFormValues(name,checked);
        }
        else{
            updateFormValues(name,value);
        }
    };
    const onSubmit=(e)=>{
        e.preventDefault();
        submitForm();
    };
    return(
        <>
            <form id='pizza-form' onSubmit={onSubmit}>
                <TextField label='Name' name='name' id='name-input' value={formValues.name} onChange={onChange}></TextField>
                <div>
                    <h3>Crust</h3>
                    <label>
                        Crust Size
                        <select name='size' id='size-dropdown' value={formValues.size} onChange={onChange}>
                            <option value=''>Select</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                    <label>
                        Gluten Free Crust
                        <input type='checkbox' name='glutenFree' checked={formValues.glutenFree} onChange={onChange}></input>
                    </label>
                </div>

                <div>
                    <h3>Toppings</h3>
                    <label>
                        Pepperoni
                        <input type='checkbox' name='pepperoni' id='pepperoni' checked={formValues.pepperoni} onChange={onChange}></input>
                    </label>
                    <label>
                        Sausage
                        <input type='checkbox' name='sausage' id='sausage' checked={formValues.sausage} onChange={onChange}></input>
                    </label>
                    <label>
                        Black Olives
                        <input type='checkbox' name='blackOlives' id='blackOlives' checked={formValues.blackOlives} onChange={onChange}></input>
                    </label>
                    <label>
                        Green Pepper
                        <input type='checkbox' name='greenPepper' id='greenPepper' checked={formValues.greenPepper} onChange={onChange}></input>
                    </label>
                </div>
                <div>
                    <h3>Special Instructions</h3>
                    <label>
                        Special Instructions
                        <input type='text' name='specialText' id='special-text' value={formValues.specialText} onChange={onChange}></input>
                    </label>
                </div>
                <button type='submit' id='order-button' disabled={!isValid}>Order</button>
                    {isValid||!(Object.keys(errors).find((key)=>errors[key]!==''))?'':
                        <div>
                            <label>
                                Error(s):
                                {Object.keys(errors).map((key,i)=><p key={i}>{errors[key]}</p>)}
                            </label>
                        </div>
                    }
                    {networkStatus?'':
                        <div>
                            <p>Network error, please try again later</p>
                        </div>
                    }
            </form>
        </>
    );
}
export default Form;