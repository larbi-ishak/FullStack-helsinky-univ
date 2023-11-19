import { useState } from "react";
const PersonForm = ({ persons, setPersons, store, setStore }) => {
  const [person, setPerson] = useState({ name: "", number: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleAddPerson = (event) => {
    event.preventDefault();

    let personExists = persons.some((member) => member.name === person.name);
    if (personExists) {
      alert(`${person.name} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: person.name,
      number: person.number,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject));
    // update the store
    setStore(store.concat(personObject));
    setPerson({ name: "", number: "" });
  };
  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name: <input name="name" value={person.name} onChange={handleChange} />
        number:{" "}
        <input name="number" value={person.number} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
