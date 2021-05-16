import * as yup from 'yup'

export const FormSchema = yup.object().shape({
    name: yup.string().min(2, 'name must be at least 2 characters').required('Name is required!'),
    pizzaSize: yup.string().oneOf(['small', 'medium', 'large', 'extraLarge'], 'Must select a size!')
})

export default FormSchema