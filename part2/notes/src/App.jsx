import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-12345567" },
  ]);
  const [person, setPerson] = useState({ name: "", number: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
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
    };
    setPersons(persons.concat(personObject));
    setPerson({ name: "", number: "" });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name:{" "}
          <input name="name" value={person.name} onChange={handleChange} />
          number:{" "}
          <input name="number" value={person.number} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
