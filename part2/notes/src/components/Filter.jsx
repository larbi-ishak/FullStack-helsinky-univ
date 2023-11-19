const Filter = ({ store, setPersons }) => {
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
      filter show with: <input type="text" onChange={handleFilter} />{" "}
    </div>
  );
};
export default Filter;
