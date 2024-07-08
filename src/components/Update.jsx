import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updatePerson } from "../features/crud/crudSlice";
import { nanoid } from "@reduxjs/toolkit";



function Update() {
  const { id } = useParams();
  const persons = useSelector(state => state.persons);
  const dispatch = useDispatch();

  const existingPerson = persons.filter(f => f.id == id);
  const { name, email } = existingPerson[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const navigate = useNavigate();


  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatePerson({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/');

  }
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden ">

      <form onSubmit={handleUpdate} className="space-y-4 p-6 bg-gray-900 rounded-lg shadow-lg  w-1/2 " >
        <div className="flex flex-col space-y-2">
          <h3 className="text-white mb-2 font-bold text-xl">Update Person Details</h3>
          <input type="text"
            placeholder="Enter a name..."
            value={uname} onChange={e => setName(e.target.value)}
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="flex flex-col space-y-2">
          <input type="email"
            placeholder="Enter an Email..."
            value={uemail} onChange={e => setEmail(e.target.value)}
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

        <button type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus: outline-none mx-2 hover:bg-indigo-600 rounded text-lg" >
          Update
        </button>
      </form>
    </div>
  )
}
export default Update