import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  persons: [
    {
      id: 1,
      name: 'Hari pathak',
      email: 'Hari22@gmail.com'
    }
  ]
}

export const crudSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action) => {
      const person = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email
      }
      state.persons.push(person)
    },
    removePerson: (state, action) => {
      state.persons = state.persons.filter((person) => person.id !== action.payload)
    },

    updatePerson: (state, action) => {
      const { id, name, email } = action.payload;
      const uPerson = state.persons.find(person => person.id == id);
      if (uPerson) {
        uPerson.name = name;
        uPerson.email = email;
      }
    }
  }
})

export const { addPerson, removePerson, updatePerson } = crudSlice.actions

export default crudSlice.reducer