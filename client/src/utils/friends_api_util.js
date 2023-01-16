export const getFriends = () =>
  fetch('http://localhost:3000/api/v1/friends', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  })
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
