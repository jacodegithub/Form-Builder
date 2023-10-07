import React, { useState } from 'react'
import { FormField } from './FormField'

export const FormBuilder = () => {

    const [fields, setFields] = useState([])
    const [newField, setNewField] = useState({
        label: '',
        type: 'text',
        options: [],
        value: ''
    })

    function addField() {
        setFields([ ...fields, {...newField}  ])
        setNewField({
            label: '',
            type: 'text',
            option: [],
            value: ''
        })
    }

    function removeField(index) {
        const updatedFields = { ...fields }
        updatedFields.splice(index, 1)
        setInterval(updatedFields)
    }

  return (
    <div>
        <h3>Form Builder</h3>
        <div>
            <label htmlFor='input'>Field label</label>
            <input 
                type='text' placeholder='type'
                value='value' 
                onChange={(e) => setNewField({ ...newField, label: e.target.value })}
            />

            <label htmlFor="field">Field Type:</label>
            <select name="field" id="field" value={newField.type} onChange={(e) => setNewField({ ...newField, type: e.target.value })}>
                <option value="text">Text Input</option>
                <option value="textarea">Text Area</option>
                <option value="dropdown">Dropdown</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio</option>
            </select>

            <button onClick={addField}>Add button</button>

        </div>
        <div>
            {
                fields && fields.map((field, index) =>(
                    <div key={index}>
                        <FormField { ...field } />
                        <button onClick={() => removeField(index)}></button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
