import React, { useState, useEffect } from 'react';
import Table from 'components/Table';

function UsersPage() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/friends')
      .then((response) => response.json())
      .then((data) => {
        setFriends(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <Table data={friends} />;
}

export default UsersPage;
