import React, { useState, useEffect } from 'react';
import Table from 'components/Table';
import { getFriends } from '../utils/friends_api_util';

function UsersPage() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getFriends().then((data) => setFriends(data));
  }, []);

  return <Table data={friends} />;
}

export default UsersPage;
