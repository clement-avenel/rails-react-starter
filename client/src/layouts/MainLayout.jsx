import React from 'react';
import { Outlet } from 'react-router';
import Header from 'components/Header';
import SideBar from 'components/SideBar';

function MainLayout() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="h-full w-full py-8 px-4 sm:px-6 md:px-8 lg:pl-72 bg:gray-100 dark:bg-gray-900">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
