import { useState } from "react";

const App = () => {
  const [store, setStore] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [persons, setPersons] = useState(store);
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
    };
    setPersons(persons.concat(personObject));
    // update the store
    setStore(store.concat(personObject));
    setPerson({ name: "", number: "" });
  };

  const handleFilter = (event) => {
    const { value } = event.target;
    const Optvalue = value.trim().toLowerCase();
    const filtered = store.filter((person) =>
      person.name.toLowerCase().includes(Optvalue),
    );
    setPersons(filtered);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter show with: <input type="text" onChange={handleFilter} />{" "}
      </div>
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
