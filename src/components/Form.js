import React from 'react';
function Form(props){
    const {formValues,updateFormValues} = props;
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
                <button type='submit' id='order-button'>Order</button>
            </form>
        </>
    );
}
export default Form;
{/* <div>
<label>
    Original Red
    <input type='radio' name='sauce' value='original-red'></input>
</label>
<label>
    Garlic Ranch
    <input type='radio' name='sauce' value='garlic-ranch'></input>
</label>
<label>
    BBQ Sauce
    <input type='radio' name='sauce' value='bbq-sauce'></input>
</label>
<label>
    Spinach Alfredo
    <input type='radio' name='sauce' value='spinach-alfredo'></input>
</label>
</div> */}