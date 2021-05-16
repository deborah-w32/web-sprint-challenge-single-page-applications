import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Form from './Components/Form'
import * as yup from 'yup'
import FormSchema from './Validation/FormSchema'
import axios from "axios";

const initialFormValues = {
  name: '',
  pizzaSize: '',
  topping: {
    pepperoni: false,
    sausage: false,
    mushroom: false,
    pineapple: false,
    extraCheese: false,
    olives: false,
    ham: false,
    onion: false,
    chicken: false,
    bellPepper: false,
  },
  special: '',
}


const App = () => {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState('')
  const [disabled, setDisabled] = useState(true)

  const orderInfo = () => {
      axios.get('https://reqres.in/api/orders')
      .then((res) => {
        console.log(res)
        setOrders(res.data.data)
      })
      .catch((err) => {
        console.log('Error getting orders: ', err)
      })
    }

  const submitForm = (event) => {
    const filterToppings = [formValues.topping]
    const yourOrder ={
      name:formValues.name.trim(),
      pizzaSize: formValues.pizzaSize,
      topping: filterToppings.filter(
        (choice) => formValues.topping[choice]
      ),
      special:formValues.special
    }

    axios.post('https://reqres.in/api/orders', yourOrder)
    .then((res) => {
      console.log(res.data)
      setOrders([res.data, ...orders])
      setFormValues(initialFormValues)
    })
    .catch((err) => {
      console.log('Error finding your order: ', err)
    })
  }

  const validationChange = (name, value) => {
    yup.reach(FormSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: '',})
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]:err.errors[0],})
    })
    setFormValues({...formValues, [name]: value,})
  }

  const checkChange = (name, isChecked) => {
    setFormValues({...formValues, topping: {...formValues.topping, [name]: isChecked}})
  }

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value,})
  }

  useEffect(() => {
    FormSchema.isValid(formValues)
    .then((valid) => {
      setDisabled(!valid)
    }, [formValues])
  })

  useEffect(() => {
    orderInfo()
  }, [])

  return (
    <>
      <div className="NavLinks">
        <nav id="order-pizza">
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </nav>
      </div>
      <h1>Lambda Eats</h1>
      <h3>Build Your Own Pizza!</h3>
      <Route exact path='/' />
      <Switch>
        <Route path='/pizza'>
          <Form
            formValues={formValues}
            submitForm={submitForm}
            inputChange={inputChange}
            checkChange={checkChange}
            validationChange={validationChange}
            disabled={disabled}
            formErrors={formErrors}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;
