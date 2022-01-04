import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
const url = process.env.REACT_APP_API_ENDPOINT;
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      });
  }, []);

  const headers = [
    {
      label: "Id",
      key: "id",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Location",
      key: "address",
    },
    {
      label: "Salary",
      key: "salary",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table style={{ width: "70%" }}>
          <thead>
            <tr>
              {headers.map((header) => {
                return <th key={header.key}>{header.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => {
              const template = headers.map((header) => (
                <td key={user._id}>{user[header.key] || id + 1}</td>
              ));
              return <tr>{template}</tr>;
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
