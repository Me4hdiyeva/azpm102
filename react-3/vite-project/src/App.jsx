import { useEffect, useState } from "react";
import { datas } from "./components/data";
function App() {
  const [data, setData] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  


  const handleSelectChange = (event) => {
    setSelectedPerson(event.target.value);
  };
  const selectedPersonDetails = datas.find(person => person.id === parseInt(selectedPerson));



  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((resp) => resp.json())
      .then((data) => setData(data))
  
  }, []);
  const [counter, setCounter] = useState(0);
  return (
    <>
     <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
        
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                {/* <td>{item.address ? item.address.street : "N/A"}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={() => setCounter((prev) => prev + 1)}>add</button>
      <span>{counter}</span>
const age = 
  
      <select value={selectedPerson} onChange={handleSelectChange}>
        <option value="">Seç</option>
        {datas.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name} {person.surname} {person.birthYear - new Date().getFullYear()}
          </option>
        ))}
      </select>

      <p>
        Selected Person: {selectedPersonDetails ? `${selectedPersonDetails.name} ${selectedPersonDetails.surname} ${selectedPersonDetails.person.birthYear - new Date().getFullYear()}`  : 'None'}
      </p>
    </>
  );



}

export default App;
