import * as yup from 'yup';
export const schema = yup.object().shape({
    name:yup.string().min(2,'name must be at least 2 characters').required(),
    size:yup.string().required(),
    pepperoni:yup.boolean(),
    sausage:yup.boolean(),
    blackOlives:yup.boolean(),
    greenPepper:yup.boolean(),
    glutenFree:yup.boolean(),
    specialText:yup.string()
});