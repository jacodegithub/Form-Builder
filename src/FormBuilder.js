import React, { useState } from 'react'

export const FormBuilder = () => {

    const [fields, setFields] = useState([])
    const [newField, setNewField] = useState({
        label: '',
        type: 'text',
        options: [],
        value: ''
    })

  return (
    <div>
        <h3>Form Builder</h3>
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

        
    </div>
  )
}
