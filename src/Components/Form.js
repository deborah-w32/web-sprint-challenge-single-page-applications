import React from 'react'


export default function Form(props){
    const { formValues, submitForm, inputChange, checkChange,validationChange, disabled, formErrors } = props

    const onSubmit = (event) => {
        event.preventDefault()
        submitForm()
    }

    const onInputChange = (event) => {
        const { name, value } = event.target
        inputChange(name, value)
    }

    const onCheckChange = (event) => {
        const { name, checked } = event.target
        checkChange(name, checked)
    }

    const onValidationChange = (event) => {
        const { name, value } = event.target
        validationChange(name, value)
    }

    return(
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className='form-inputs'>
                <label>Name:
                    <input
                    name='name'
                    type='text'
                    id='name-input'
                    onChange={onValidationChange}
                    value={formValues.name}
                    />
                </label>
                <label>Pizza Size: 
                    <select name='pizzaSize' id='size-dropdown' value={formValues.pizzaSize} onChange={onInputChange}>
                    <option value=''>-- Select Pizza Size-- </option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='extraLarge'>Extra-Large</option>
                    </select>
                </label>
                <p>Toppings:</p>
                <label>Pepperoni
                    <input
                    name='pepperoni'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.pepperoni === true}
                    />
                </label>
                <label>Sausage
                    <input
                    name='sausage'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.sausage === true}
                    />
                </label>
                <label>Mushroom
                    <input
                    name='mushroom'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.mushroom === true}
                    />
                </label>
                <label>Pineapple
                    <input
                    name='pineapple'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.pineapple === true}
                    />
                </label>
                <label>Extra Cheese
                    <input
                    name='extraCheese'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.extraCheese === true}
                    />
                </label>
                <label>Olives
                    <input
                    name='olives'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.olives === true}
                    />
                </label>
                <label>Ham
                    <input
                    name='ham'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.ham === true}
                    />
                </label>
                <label>Onion
                    <input
                    name='onion'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.onion === true}
                    />
                </label>
                <label>Chicken
                    <input
                    name='chicken'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.chicken === true}
                    />
                </label>
                <label>Bell Pepper
                    <input
                    name='bellPepper'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={formValues.toppings.bellPepper === true}
                    />
                </label>
                <label>Special Instructions:
                    <input
                    name='special'
                    type='text'
                    id='special-text'
                    onChange={onInputChange}
                    value={formValues.special}
                    />
                </label>
                <button id='order-button' disabled={disabled}>Add to Order</button>
            </div>
            <div>
                <div>{formErrors.name}</div>
                <div>{formErrors.pizzaSize}</div>
            </div>
        </form>
    )
}
