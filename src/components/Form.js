import React from 'react';
import {
    TextField,Select,MenuItem,InputLabel,FormControl,
    makeStyles,Checkbox,FormControlLabel,FormHelperText,
    FormGroup,Container,Grid,Button
} from '@material-ui/core';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
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
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    const classes = useStyles();
    return(
        <Container maxWidth='sm'>
            <form id='pizza-form' onSubmit={onSubmit}>
                <TextField label='Name' name='name' id='name-input' value={formValues.name} onChange={onChange}></TextField>
                {errors.name?<FormHelperText>{errors.name}</FormHelperText>:''}
                <Grid container direction='column'>
                    <StyledH3>Crust</StyledH3>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='size-selector'>Size</InputLabel>
                        <Select labelId='size-selector' label='Crust Size' name='size' id='size-dropdown' value={formValues.size} onChange={onChange}>
                            <MenuItem value=''>--Select--</MenuItem>
                            <MenuItem value='small'>Small</MenuItem>
                            <MenuItem value='medium'>Medium</MenuItem>
                            <MenuItem value='large'>Large</MenuItem>
                        </Select>
                    {errors.size?<FormHelperText>{errors.size}</FormHelperText>:''}
                    </FormControl>
                    <FormControlLabel label='Gluten Free Crust' control={
                        <Checkbox name='glutenFree' checked={formValues.glutenFree} onChange={onChange}></Checkbox>
                    }/>
                </Grid>

                <FormGroup>
                    <StyledH3>Toppings</StyledH3>
                    <FormControlLabel label='Pepperoni' control={
                        <Checkbox name='pepperoni' id='pepperoni' checked={formValues.pepperoni} onChange={onChange}></Checkbox>
                    }></FormControlLabel>
                    <FormControlLabel label='Sausage' control={
                        <Checkbox name='sausage' id='sausage' checked={formValues.sausage} onChange={onChange}></Checkbox>
                    }></FormControlLabel>
                    <FormControlLabel label='Black Olives' control={
                        <Checkbox name='blackOlives' id='blackOlives' checked={formValues.blackOlives} onChange={onChange}></Checkbox>
                    }></FormControlLabel>
                    <FormControlLabel label='Green Pepper' control={
                        <Checkbox name='greenPepper' id='greenPepper' checked={formValues.greenPepper} onChange={onChange}></Checkbox>
                    }></FormControlLabel>
                </FormGroup>
                <div>
                    <StyledH3>Special Instructions</StyledH3>
                    <TextField label='Special Instructions' name='specialText' id='special-text' value={formValues.specialText} onChange={onChange}></TextField>
                </div>
                <Grid container justify='space-around'>
                    <Button component={Link} to='/' color='primary' variant='conatained'>Back</Button>
                    <Button type='submit' id='order-button' disabled={!isValid} color='primary' variant='contained'>Order</Button>
                </Grid>
                    {networkStatus?'':
                        <div>
                            <p>Network error, please try again later</p>
                        </div>
                    }
            </form>
        </Container>
    );
}
export default Form;
const StyledH3 = styled.h3`
    text-align:center;
`;