import React from 'react';

function HomePage() {
  return (
    <div className="w-full block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        This is a{' '}
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Rails & React
        </span>{' '}
        starter
      </h1>
      <p className="text-md font-normal text-gray-500 lg:text-md dark:text-gray-400">
        It combines the power of the React JavaScript framework with the simplicity and robustness
        of the Rails web application framework. The project is set up with a Rails backend that
        serves a JSON API and a React frontend that consumes the API and manages the
        application&apos;s state.
      </p>
    </div>
  );
}

export default HomePage;
