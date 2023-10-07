import React from 'react'

export const FormField = ({label, type, value, options}) => {

    let inputField;

    switch(type) {
        case 'text': 
            inputField = <input type="text" />
            break;
        
        case 'textarea':
            inputField = <input type="textarea" />
            break;

        case 'dropdown':
            inputField = (
                <select>
                    {
                        options && options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
            )
            break;

        default:
            inputField = null
    }
  return (
    <div>
        <label htmlFor="inputField">{label}</label>
        {inputField}
    </div>
  )
}
