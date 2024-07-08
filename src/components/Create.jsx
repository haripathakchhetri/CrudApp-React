import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removePerson } from "../features/crud/crudSlice"

const Create = () => {

  const persons = useSelector(state => state.persons)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="my-10">Crud App</h2>
      <Link to="/AddPerson" className="bg-green-500 text-[20px] py-2 px-4 rounded-md mt-5 ">Create +</Link>
      <div className="text-xl font-bold my-10">Name of the person</div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 border-b">ID</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Name</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Email</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, id) => (
            <tr key={person.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{id + 1}</td>
              <td className="py-2 px-4 border-b">{person.name}</td>
              <td className="py-2 px-4 border-b">{person.email}</td>
              <td >
                <Link to={`/edit/${person.id}`} className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 mr-2" >Edit</Link>
                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600" onClick={() => dispatch(removePerson(person.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Create