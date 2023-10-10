/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);


  const handleAddUser = e =>{

e.preventDefault();
const form =e.target;
const name =form.name.value;
const email =form.email.value;
const data = {name,email}

console.log(data)
fetch('http://localhost:5000/users',{

method:"post",
headers:{
  'content-Type': 'application/json'
},
body:JSON.stringify(data)


})

.then(res =>res.json())
.then(data => {
  console.log(data)

  const newUsers = [...data,data]
  setData(newUsers)

  form.reset();       
})

  }

  useEffect(() => {

    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setData(data))

  }, [])

  return (
    <>
      <h2 className='text-center font-bold mt-6'>my server user manegment</h2>
      <li className='text-center mt-2'>


        mY allData : {data.length}

      </li>

      <div className='text-center '>
        <form onSubmit={handleAddUser}>

        <input type="name" name='name' required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
<br />

        <input type="email" name='email'required placeholder="Type here" className="input input-bordered w-full max-w-xs" />

<br className='' />
        <input className='btn' type="submit" value="Add User" />






        </form>


      </div>

      <div className='text-center mt-4'>
        {

          data.map(selectData => <p key={selectData.id}> {selectData.id} :::    {selectData.name} ::::    {selectData.email}</p>)
        }
      </div>
    </>
  )
}

export default App
