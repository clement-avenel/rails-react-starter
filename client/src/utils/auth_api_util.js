export const login = (email, password) =>
  fetch('http://localhost:3000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        email,
        password
      }
    })
  })
    .then((res) => {
      if (res.ok) {
        localStorage.setItem('token', res.headers.get('Authorization'));
        return res.json();
      } else {
        throw new Error(res);
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));

export const signup = (user) =>
  fetch({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/auth/signup',
    data: { user }
  });

export const logout = () =>
  fetch({
    method: 'DELETE',
    url: 'http://localhost:3000/api/v1/auth/logout'
  }).then((res) => {
    localStorage.removeItem('token');
    return res;
  });

export const checkAuth = () => {
  return fetch('http://localhost:3000/api/v1/auth/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data.status === 200;
    })
    .catch(() => {
      return false;
    });
};
