import React, { useState } from 'react'

const SingleInputFields = () => {

    const [array_value, setArray_value] = useState([])

    const AddNewValue = () => {

        const new_value = [...array_value, ""]
        setArray_value(new_value)

    }

    const UpdateChange = (event, index) =>{

        const input_data = [...array_value]
        input_data[index] = event.target.value
        setArray_value(input_data)

    }

    const DeleteValue = (index) => {

        const delete_value = [...array_value]
        delete_value.splice(index, 1)
        setArray_value(delete_value)

    }

    let new_input_field = array_value.map((data, index) => 
    {
        return (
            <div key= {index}>

                <input className='Form-control p-2 m-2' type="text" value={data} onChange={(event) => UpdateChange(event, index)} />
                <button className='btn btn-outline-danger p-2 ' onClick={() => DeleteValue(index)}>X</button>

            </div>
        )
    })

    const submitData = () =>{

        console.log(array_value)
    }
  return (
    <div>

        <h2>Single Input fields:</h2>
        <button className='btn btn-outline-success m-2' onClick={() => AddNewValue()}>Add Input Field</button>
        {new_input_field}

        <div>
            <button className='btn btn-outline-primary m-2' onClick={submitData}> Submit </button>
        </div>
    </div>
  )
}

export default SingleInputFields