// import { useDispatch, useSelector } from "react-redux"
// import { removePerson } from "../features/crud/crudSlice"
// import { Link } from "react-router-dom"


// const Persons = () => {

//   const persons = useSelector(state => state.persons)
//   const dispatch = useDispatch()

//   return (

//     <div className="flex items-center justify-center h-screen ">
//       <table className="min-w-full bg-white border border-gray-200 ">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 bg-gray-200 border-b">ID</th>
//             <th className="py-2 px-4 bg-gray-200 border-b">Name</th>
//             <th className="py-2 px-4 bg-gray-200 border-b">Email</th>
//             <th className="py-2 px-4 bg-gray-200 border-b">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {persons.map((person, id) => (
//             <tr key={person.id} className="hover:bg-gray-100">
//               <td className="py-2 px-4 border-b">{id + 1}</td>
//               <td className="py-2 px-4 border-b">{person.name}</td>
//               <td className="py-2 px-4 border-b">{person.email}</td>
//               <td className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
//                 <button onClick={() => dispatch(removePerson(person.id))}>
//                   X
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//   )
// }
// export default Persons
