import React, { useEffect, useState } from 'react';
import"./App.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Username</th>
          <th>Birth Date</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Address (Coordinates)</th>
          <th>Card Expiry</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              <img
                src={user.image}
                alt={user.name}
                style={{ width: '50px', height: '50px' }}
                />
              </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.username}</td>
            <td>{user.birthDate}</td>
            <td>{user.height}</td>
            <td>{user.weight}</td>
            <td>{`${user.address.city} (${user.address.coordinates.lat}, ${user.address.coordinates.lng})`}</td>
            <td>{user.bank.cardExpire}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <div>
      <h1>User Table</h1>
      <UserTable />
    </div>
  );
};

export default App;

