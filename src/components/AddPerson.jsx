import { useState } from "react"
import { useDispatch } from "react-redux";
import { addPerson } from "../features/crud/crudSlice";
import { useNavigate } from "react-router-dom"


const AddPerson = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const addNameHandler = (e) => {
    e.preventDefault();
    dispatch(addPerson({ name: name, email: email }))
    setName('')
    setEmail('')
    navigate('/')
  }
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden ">
      <form onSubmit={addNameHandler} className="space-y-4 p-6 bg-gray-900 rounded-lg shadow-lg  w-1/2 " >

        <div className="flex flex-col space-y-2">
          <h1 className="text-white mb-2 font-bold text-xl">Add Person</h1>
          <input type="text"
            placeholder="Enter a name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="flex flex-col space-y-2">
          <input type="email"
            placeholder="Enter an Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

        <button type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus: outline-none mx-2 hover:bg-indigo-600 rounded text-lg" >
          Add Person
        </button>
      </form>
    </div>

  )
}
export default AddPerson