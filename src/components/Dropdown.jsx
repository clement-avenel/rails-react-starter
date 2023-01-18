import { useState } from 'react';
import PropTypes from 'prop-types';
import useAuthContext from 'hooks/useAuthContext';

function Dropdown({ icon: Icon }) {
  const { logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <button className="relative z-10 block h-8 w-8 overflow-hidden" onClick={toggleDropdown}>
          <Icon className="h-5 w-5 text-gray-600 dark:text-white" />
        </button>
        <button
          className={isOpen ? ' cursor-default fixed inset-0 w-full h-full' : 'hidden'}
          onClick={closeDropdown}
          tabIndex="-1"
        />
        <div
          className={
            isOpen
              ? 'absolute border border-gray-200 right-0 mt-2 w-40 bg-white rounded-lg py-2 shadow-xl dark:bg-gray-800 dark:border-gray-700'
              : 'hidden'
          }>
          <button
            key="account"
            className="flex items-center w-full py-2 px-2.5 text-sm text-slate-700 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300">
            Account
          </button>
          <button
            key="logout"
            className="flex items-center w-full py-2 px-2.5 text-sm text-slate-700 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  icon: PropTypes.elementType
};
Dropdown.defaultProps = {
  icon: null
};

export default Dropdown;
