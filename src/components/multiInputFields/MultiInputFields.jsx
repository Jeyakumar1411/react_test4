import React, { useState } from 'react'

const MultiInputFields = () => {

    const [array_value, setArrayValue] = useState([])
    const [selected_index, setSelectedIndex] = useState("")

    const AddNewValue = () => {

        const new_value = [...array_value, {
            first_name: "",
            last_name: ""
        }]
        setArrayValue(new_value)

    }

    const AddNewOnTop = () => {

        const new_value = [...array_value]
        new_value.splice(0, 0, {
            first_name: "",
            last_name: ""
        })
        setArrayValue(new_value)

    }

    const AddNewOnLast = () => {

        const new_value = [...array_value]
        new_value.splice(new_value.length, new_value.length, {
            first_name: "",
            last_name: ""
        })
        setArrayValue(new_value)        

    }

    const UpdateFirstName = (event, index) => {

        const input_data = [...array_value]
        let selected_object = input_data[index]

        selected_object.first_name = event.target.value
        setArrayValue(input_data)

    }

    const UpdateLastName = (event, index) => {

        const input_data = [...array_value]
        let selected_object = input_data[index]

        selected_object.last_name = event.target.value
        setArrayValue(input_data)

    }

    const DeleteValue = (index) => {

        const delete_value = [...array_value]
        delete_value.splice(index, 1)

        setArrayValue(delete_value)

    }

    const FieldOnSelectedIndex = () => {

        const new_value = [...array_value]
        const actual_index = selected_index - 1

        new_value.splice(actual_index, 0, {
            first_name: "",
            last_name: ""
        })
        setArrayValue(new_value)
        setSelectedIndex('')

    }

    const SubmitData = () => {
        console.log(array_value)
    }

    let new_input_field = array_value.map((data, index) => {
        return(
        <div key={index}>
            <label htmlFor="">Sno: {index +1} </label>

            <div className='col-md-3'>
            {/* <label htmlFor="">First Name:</label>   */}
            <input className='form-control m-3' placeholder='First Name' type="text" value={data.first_name} onChange={(event) => UpdateFirstName(event, index)} />
            {/* </div>

            <div className='col-md-3'> */}
            {/* <label htmlFor="">Last Name:</label> */}
            <input className='form-control m-3' placeholder='Last Name' type="text" value={data.last_name} onChange={(event) => UpdateLastName(event, index)} />
            {/* </div>

            <div className='col-md-3'> */}
            <button className='btn btn-outline-danger' onClick={() => DeleteValue(index)}>X</button>
            </div>
        </div>
        )
    })

  return (
    <div>

        <h2>Multi Input Field:</h2>

        <button className='btn btn-success m-2' onClick={() => AddNewValue()}>Add Input Field</button>

        <button className='btn btn-primary m-2' onClick={() => AddNewOnTop()}>Add on Top</button>

        <button className='btn btn-primary m-2' onClick={() => AddNewOnLast()}>Add on Last</button>

        <div className='col-md-3 m-2'>
        <label htmlFor="">Enter Field After</label>
        <input className='form-control m-1' type="number" value={selected_index} onChange={(event) => setSelectedIndex(event.target.value)} placeholder='enter the field number' />
        </div>

        <button className='btn btn-outline-primary m-2' onClick={FieldOnSelectedIndex}>Submit</button>

        {new_input_field}

       
        <button className='btn btn-outline-primary m-2' onClick={SubmitData}>Submit Data</button>
       

    </div>
  )
}

export default MultiInputFields