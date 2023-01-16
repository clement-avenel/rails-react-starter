import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { user, login } = useAuthContext();

  if (user) {
    return <Navigate replace to="/" />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <section className="flex h-screen w-full flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="w-full max-w-xl mx-auto lg:w-96">
        <div>
          <a className="text-blue-600 text-medium" href="./index.html">
            Brand.
          </a>
          <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Sign in.</h2>
        </div>

        <div className="mt-8">
          <div className="mt-6">
            <form onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-neutral-600" htmlFor="email">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="email"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required=""
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-neutral-600" htmlFor="password">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="current-password"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                    required=""
                    type="password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                    id="remember-me"
                    name="remember-me"
                    placeholder="Your password"
                    type="checkbox"
                  />
                  <label className="block ml-2 text-sm text-neutral-600" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a className="font-medium text-blue-600 hover:text-blue-500" href="#">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
