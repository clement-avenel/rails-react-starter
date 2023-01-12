export const login = (email, password) =>
  fetch('http://localhost:3000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      user: {
        first_name: 'Clément',
        last_name: 'Avenel',
        email,
        password
      }
    })
  })
    .then((response) => response)
    .catch((err) => {
      console.log(err);
    });

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
  });

export const checkAuth = () => {
  return fetch('http://localhost:3000/api/v1/auth/check_session', {
    method: 'GET',
    credentials: 'include'
  }).then((response) => {
    return response.status === 200;
  });
};
