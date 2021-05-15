import React from 'react';
function Form(props){
    const {formValues,updateFormValues,isValid,errors} = props;
    const onChange =(e)=>{
        const {name,type,value,checked} = e.target;
        if(type==='checkbox'){
            updateFormValues(name,checked);
        }
        else{
            updateFormValues(name,value);
        }
    };
    return(
        <>
            <form id='pizza-form'>
                <label>
                    Name
                    <input type='text' name='name' id='name-input' value={formValues.name} onChange={onChange}></input>
                </label>
                <select name='size' id='size-dropdown' value={formValues.size} onChange={onChange}>
                    <option value=''>Select</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
                <div>
                    <label>
                        Pepperoni
                        <input type='checkbox' name='pepperoni' checked={formValues.pepperoni} onChange={onChange}></input>
                    </label>
                    <label>
                        Sausage
                        <input type='checkbox' name='sausage' checked={formValues.sausage} onChange={onChange}></input>
                    </label>
                    <label>
                        Black Olives
                        <input type='checkbox' name='blackOlives' checked={formValues.blackOlives} onChange={onChange}></input>
                    </label>
                    <label>
                        Green Pepper
                        <input type='checkbox' name='greenPepper' checked={formValues.greenPepper} onChange={onChange}></input>
                    </label>
                </div>
                <label>
                    Special Instructions
                    <input type='text' name='specialText' id='special-text' value={formValues.specialText} onChange={onChange}></input>
                </label>
                <button type='submit' id='order-button' disabled={!isValid}>Order</button>
                    {isValid||!(Object.keys(errors).find((key)=>errors[key]!==''))?'':
                        <label>
                            Error(s):
                            {Object.keys(errors).map((key,i)=><p key={i}>{errors[key]}</p>)}
                        </label>
                    }
            </form>
        </>
    );
}
export default Form;