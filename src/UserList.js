import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/car/car_list')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user list!', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
       {console.log(users)} 
        {users.map(user => (
            
          <li key={user.id}>{user.name}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default UserList;